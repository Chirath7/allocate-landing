import SectionTag from "./ui/SectionTag";
import TrustReasoningDiagram from "./TrustReasoningDiagram";

const VALUES = [
  ["~30%", "Estimated reduction in idle capacity"],
  ["↑ Use", "Get more out of what you already have"],
  ["→ Data", "Decisions grounded in real patterns"],
];

export default function ValueGrid() {
  return (
    <section className="section wrap">
      <SectionTag>Why It Works</SectionTag>
      <h2 className="mono" style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        Built on operations research, not guesswork.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        The same mathematics behind airline crew rosters and transit dispatch — applied to your business.
      </p>
      <div style={{ marginBottom: 48 }}>
      </div>

      <div className="value-grid">
        {VALUES.map(([num, label]) => (
          <div key={num} className="hover-card" style={{ background: "var(--panel)", padding: "28px 24px", border: "1px solid var(--line)", borderRadius: 8 }}>
            <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: "var(--amber)", marginBottom: 8 }}>
              {num}
            </div>
            <div style={{ fontSize: 14, color: "var(--text-dim)" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
