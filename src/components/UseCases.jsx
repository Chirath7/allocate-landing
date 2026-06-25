import SectionTag from "./ui/SectionTag";

const CASES = [
  ["1000 → 24hr", "Workforce Scheduling", "Assign the right people to the right shift, balanced against demand, fatigue rules, and fairness — automatically."],
  ["100 → 110", "Capacity & Booking", "Sell beyond fixed capacity safely, using historical no-show and cancellation patterns to protect against overcommitment."],
  ["N vehicles", "Fleet & Routing", "Keep every vehicle working — matched to jobs, routed efficiently, without conflicts or downtime."],
];

export default function UseCases() {
  return (
    <section id="cases" className="section wrap">
      <SectionTag>Use Cases</SectionTag>
      <h2 className="mono" style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        The same engine, three different problems.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        These aren't hypotheticals — they're the exact categories operations teams optimize every day.
      </p>

      <div className="usecases-grid">
        {CASES.map(([tag, title, body]) => (
          <div key={title} className="hover-card" style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8, padding: 28 }}>
            <div
              className="mono"
              style={{
                fontSize: 13,
                color: "var(--cyan)",
                background: "var(--panel-2)",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: 4,
                marginBottom: 18,
              }}
            >
              {tag}
            </div>
            <h3 style={{ fontSize: 17, marginBottom: 8, fontWeight: 700 }}>{title}</h3>
            <p style={{ color: "var(--text-dim)", fontSize: 14.5 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
