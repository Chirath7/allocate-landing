export default function ProvenBand() {
  return (
    <section className="wrap">
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "40px 0" }}>
        <div
          className="mono"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            fontSize: 13,
            color: "var(--text-dim)",
            letterSpacing: 0.5,
          }}
        >
          <span>
            NOT A NEW IDEA — <b style={{ color: "var(--text)" }}>PROVEN AT SCALE</b>
          </span>
          <span>AVIATION CREW ROSTERING</span>
          <span>BUS &amp; TRANSIT DISPATCH</span>
          <span>LOGISTICS &amp; LOAD PLANNING</span>
        </div>
      </div>
    </section>
  );
}
