import Image from "next/image";

export function RadarGraphic() {
  return (
    <div className="radar" role="img" aria-label="Radar de vigilancia animado">
      <div className="radar-logo-frame">
        <Image src="/assets/logo-512.png" alt="" fill sizes="360px" style={{ objectFit: "contain" }} />
      </div>
      <div className="radar-crosshair" />
      <span className="radar-center" />
    </div>
  );
}
