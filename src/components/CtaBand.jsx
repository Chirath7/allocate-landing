import Button from "./ui/Button";

export default function CtaBand({ onDemoClick }) {
  return (
    <section className="wrap" style={{ padding: "0 32px 88px" }}>
      <div
        style={{
          background: "var(--panel)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          padding: "56px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 className="mono" style={{ fontSize: 24, marginBottom: 8 }}>
            See what optimization can do for your business.
          </h2>
          <p style={{ color: "var(--text-dim)", fontSize: 15 }}>
            Request a free demo — bring your data, we'll show you the plan it could become.
          </p>
        </div>
        <div className="nav-button">
                  <Button onClick={onDemoClick}>Request a Demo</Button>
        </div>
      </div>
    </section>
  );
}