import Button from "./ui/Button";
import GridStage from "./GridStage";

export default function Hero({ onDemoClick }) {
  return (
    <header className="wrap hero-grid">
      <div>
        <div
          className="mono"
          style={{
            fontSize: 12,
            color: "var(--cyan)",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ width: 18, height: 1, background: "var(--cyan)" }} />
          Resource Optimization Engine
        </div>
        <h1 className="mono hero-title">
          Stop guessing.
          <br />
          Start <span style={{ color: "var(--amber)" }}>allocating</span> on data.
        </h1>
        <p style={{ fontSize: 14, color: "var(--cyan)", marginBottom: 24 }} className="mono">
          Built on the same optimization research used in airline crew rostering and transit dispatch.
        </p>
        <p style={{ fontSize: 17, color: "var(--text-dim)", maxWidth: 480, marginBottom: 32 }}>
          One optimization engine for your workforce, fleet, or capacity — it reads your real
          usage patterns and hands back the most efficient plan, automatically.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button solid onClick={onDemoClick}>Request a Demo</Button>
          <span
            className="mono"
            style={{
              fontSize: 13,
              color: "var(--text-dim)",
              padding: "10px 6px",
              borderBottom: "1px solid var(--line)",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("how")?.scrollIntoView()}
          >
            See how it works ↓
          </span>
        </div>
      </div>
      <GridStage />
      
    </header>
  );
}
