export function RadarGraphic() {
  return (
    <div className="radar" role="img" aria-label="Radar de vigilancia animado">
      <div className="radar-crosshair" />
      <span className="radar-center" />
      <span className="radar-blip" style={{ top: '30%', left: '64%', animationDelay: '0s' }} />
      <span className="radar-blip" style={{ top: '60%', left: '34%', animationDelay: '0.9s' }} />
      <span className="radar-blip" style={{ top: '40%', left: '28%', animationDelay: '1.7s' }} />
    </div>
  );
}
