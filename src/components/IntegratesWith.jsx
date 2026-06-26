import SectionTag from "./ui/SectionTag";

const CATEGORIES = ["HR & Payroll Systems", "Scheduling Tools", "Fleet Management Software", "Booking Platforms"];

export default function IntegratesWith() {
  return (
    <section className="section wrap">
      <SectionTag>Fits Your Stack</SectionTag>
      <h2 className="mono" style={{ fontSize: 25, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        Built to fit into how you already work.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 32 }}>
        No migration, no rip-and-replace — plug your existing data in and get an optimized plan back.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {CATEGORIES.map((c) => (
          <div
            key={c}
            className="mono"
            style={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderRadius: 6,
              padding: "10px 16px",
              fontSize: 13,
              color: "var(--text-dim)",
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}