import { useEffect, useState } from "react";

const TOTAL = 80;
const AMBER = "#f69366";
const CYAN = "#459990";

export default function GridStage() {
  const [cells, setCells] = useState(Array(TOTAL).fill(null));

  const scatter = () => {
    const next = Array(TOTAL).fill(null);
    const idxs = [...Array(TOTAL).keys()];
    for (let i = 0; i < 28; i++) {
      const r = idxs.splice(Math.floor(Math.random() * idxs.length), 1)[0];
      next[r] = {
        color: Math.random() > 0.3 ? AMBER : CYAN,
        x: (Math.random() * 6 - 3).toFixed(1),
        y: (Math.random() * 6 - 3).toFixed(1),
      };
    }
    setCells(next);
  };

  const organize = () => {
    const next = Array(TOTAL).fill(null);
    for (let i = 0; i < 40; i++) {
      next[i] = { color: i % 7 === 0 ? CYAN : AMBER, x: 0, y: 0 };
    }
    setCells(next);
  };

  useEffect(() => {
    scatter();
    const t = setTimeout(organize, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      onMouseEnter={() => {
        scatter();
        setTimeout(organize, 700);
      }}
      style={{
        position: "relative",
        aspectRatio: "1/0.92",
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        padding: 20,
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 11,
          color: "var(--text-dim)",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 14,
          letterSpacing: 0.5,
        }}
      >
        <span>RESOURCE_MAP.LIVE</span>
        <span style={{ color: "var(--cyan)" }}>● optimizing</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          gap: 4,
          height: "calc(100% - 30px)",
        }}
      >
        {cells.map((c, i) => (
          <div
            key={i}
            style={{
              background: c ? c.color : "var(--panel-2)",
              borderRadius: 2,
              transform: c ? `translate(${c.x}px, ${c.y}px)` : "translate(0,0)",
              transition: "transform 1.1s cubic-bezier(.22,1,.36,1), background 1.1s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
