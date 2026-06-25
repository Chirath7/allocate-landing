export default function Button({ children, solid = false, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: 0.3,
        padding: "10px 20px",
        borderRadius: 4,
        border: "1px solid var(--amber)",
        color: solid ? "var(--bg)" : "var(--amber)",
        background: solid ? "var(--amber)" : "transparent",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s, color 0.2s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
