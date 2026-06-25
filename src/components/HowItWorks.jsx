import SectionTag from "./ui/SectionTag";

const STEPS = [
  ["01 · INPUT", "Your data, as-is", "Shift rules, capacity limits, fleet specs, booking history — upload it or connect it directly."],
  ["02 · ENGINE", "Predict, then solve", "Pattern prediction estimates the uncertain parts (no-shows, demand); optimization solves for the best fit under your constraints."],
  ["03 · OUTPUT", "A plan you can use", "A ready allocation — schedule, route, or seat map — built to maximize efficiency without breaking a single rule."],
];

export default function HowItWorks() {
  return (
    <section id="how" className="section wrap">
      <SectionTag>The Solution</SectionTag>
      <h2 className="mono" style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        One engine. Any resource.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        Feed it your constraints and history. It predicts what's uncertain, then solves for the
        most efficient arrangement that fits every rule.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
          background: "var(--line)",
          border: "1px solid var(--line)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {STEPS.map(([step, title, body]) => (
          <div key={step} style={{ background: "var(--panel)", padding: "32px 28px" }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--cyan)", letterSpacing: 1, marginBottom: 16 }}>
              {step}
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
            <p style={{ color: "var(--text-dim)", fontSize: 14.5 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
