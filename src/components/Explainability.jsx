import SectionTag from "./ui/SectionTag";
import TrustReasoningDiagram from "./TrustReasoningDiagram";

export default function Explainability() {
  return (
    <section className="section wrap">
      <SectionTag>Trust</SectionTag>
      <h2 className="mono" style={{ fontSize: 25, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        Not a black box.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 640, marginBottom: 40 }}>
        Every plan comes with a clear breakdown of why each assignment was made — which constraint
        it satisfied, which pattern it was based on, and what trade-off was made. You can see the
        reasoning, not just the result.
      </p>

      <TrustReasoningDiagram />
    </section>
  );
}