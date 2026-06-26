export default function SectionTag({ children }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 50,
        color: "var(--cyan)",
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 0,
      }}
    >
      {children}
    </div>
  );
}
