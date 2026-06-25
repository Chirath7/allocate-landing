export default function Footer() {
  return (
    <footer
      className="wrap"
      style={{
        borderTop: "1px solid var(--line)",
        padding: "36px 32px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        fontSize: 13,
        color: "var(--text-dim)",
      }}
    >
      <div className="mono" style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 8, height: 8, background: "var(--amber)", borderRadius: 1, display: "inline-block" }} />
        ALLOCATE
      </div>
      <div>© 2026 Allocate. All rights reserved.</div>
    </footer>
  );
}
