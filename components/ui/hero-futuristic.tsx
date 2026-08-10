'use client';

/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/refs, react-hooks/immutability --
 * React Three Fiber's useFrame runs its callback outside React's render/commit
 * cycle (a per-frame imperative loop, not a re-render), so mutating TSL uniform
 * .value fields there — and caching a uniform node on a ref during the useMemo
 * that builds the node graph — is the standard R3F pattern, not a rendering bug.
 * The newer React-Compiler-oriented "refs"/"immutability" lint rules can't
 * distinguish this from real render-phase mutation. Likewise the `as any` casts
 * are interop boundaries against three/webgpu's still-unstable public types
 * (WebGPURenderer/PostProcessing constructor args), not untyped app logic. */

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add
} from 'three/tsl';

// Self-hosted (not the original demo's postimg.cc URLs) — see plan Fase 4/8.
// The texture/depth pair is an abstract pattern, not a literal photo, so it
// doesn't misrepresent Guasepresa; a real matched RGB+depth pair for brand
// photography is out of scope for this integration.
const TEXTUREMAP = { src: '/assets/hero/texture.png' };
const DEPTHMAP = { src: '/assets/hero/depth.webp' };

extend(THREE as any);

const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = false,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    // Scanning effect uniform — a red ring that sweeps across the circle
    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.4);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);

    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    render.renderAsync();
  }, 1);

  return null;
};

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 1,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 0.62;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

interface HeroFuturisticProps {
  className?: string;
}

/**
 * Decorative WebGPU/TSL visual for the hero — a depth-parallax texture with
 * bloom + an animated scan ring. Caller is responsible for WebGPU feature
 * detection and reduced-motion gating (see lib/webgpu-support.ts and
 * components/hero/hero-canvas.tsx); this component assumes it's safe to mount.
 * No on-canvas title/copy: the real <h1>/lede in app/page.tsx carry that,
 * so this stays purely decorative (better for SEO/accessibility than the
 * original demo's canvas-adjacent glitch-text overlay).
 */
export const HeroFuturistic = ({ className }: HeroFuturisticProps) => {
  return (
    <Canvas
      className={className}
      flat
      gl={async (props) => {
        const renderer = new THREE.WebGPURenderer(props as any);
        await renderer.init();
        return renderer;
      }}
    >
      <PostProcessing fullScreenEffect={false} />
      <Scene />
    </Canvas>
  );
};

export default HeroFuturistic;
