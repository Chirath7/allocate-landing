import SectionTag from "./ui/SectionTag";

const ROWS = [
  ["01", "1,000 employees, 24-hour coverage — and you're still short-staffed at peak hours.", "UNDERSTAFFED"],
  ["02", "Seats, rooms, or capacity sitting empty because of predictable no-shows.", "UNDERUTILIZED"],
  ["03", "Vehicles idle in one location while jobs queue up in another.", "MISALLOCATED"],
  ["04", "Manual re-planning every time something changes — sick day, cancellation, delay.", "TIME LOST"],
];

export default function ProblemSection() {
  return (
    <section className="section wrap">
      <SectionTag>The Problem</SectionTag>
      <h2 className="mono" style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        Three ways resources quietly leak away.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        Most planning is still done by hand, or by rules of thumb. That gap between "assigned" and
        "optimal" costs hours, money, and capacity every single day.
      </p>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        {ROWS.map(([tag, desc, status]) => (
          <div
            key={tag}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 140px",
              alignItems: "center",
              padding: "24px 0",
              borderBottom: "1px solid var(--line)",
              gap: 20,
            }}
          >
            <span className="mono" style={{ fontSize: 13, color: "var(--text-dim)" }}>{tag}</span>
            <span style={{ fontSize: 16 }}>{desc}</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--amber)", textAlign: "right", letterSpacing: 0.3 }}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
