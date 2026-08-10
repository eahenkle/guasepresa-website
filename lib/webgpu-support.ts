export function hasWebGPU(): boolean {
  return typeof navigator !== "undefined" && "gpu" in navigator;
}
