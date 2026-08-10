const ITEMS = [
  { icon: true, text: "Estado del servicio: ", strong: "Operativo" },
  { text: "Base en Tiquisate, Escuintla" },
  { text: "Vigilancia 24/7" },
  { text: "Cliente institucional: ", strong: "IGSS" },
  { text: "Operando desde 2013" },
  { text: "Calificación Cybo: ", strong: "4.4 / 5" },
];

function TickerItems() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span className="ops-ticker-item" key={i}>
          {item.icon && <span className="dot" />}
          {item.text}
          {item.strong && <strong>{item.strong}</strong>}
        </span>
      ))}
    </>
  );
}

export function OpsTicker() {
  return (
    <div className="ops-ticker band-ink" style={{ marginTop: "72px" }} aria-hidden="true">
      <div className="ops-ticker-track">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
