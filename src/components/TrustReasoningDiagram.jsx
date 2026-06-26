import React from "react";

/**
 * TrustReasoningDiagram
 * Signature visual for the "Trust — Not a black box" section.
 * Colors aligned to Allocate's brand variables (--amber #FF7A45, --cyan #3DD6C4).
 */
export default function TrustReasoningDiagram() {
  return (
    <div className="trd-root">
      <style>{`
        .trd-root {
            --bg: #EFE9E3;
            --bg-glow-amber: rgba(201, 96, 47, 0.12);
            --bg-glow-teal: rgba(47, 124, 116, 0.10);
            --glass: rgba(35,31,28,0.04);
            --glass-border: rgba(35,31,28,0.14);
            --ink: #231F1C;
            --ink-dim: rgba(35,31,28,0.56);
            --amber: #C9602F;
            --amber-deep: #a14e26;
            --teal: #2F7C74;
            --line: rgba(35,31,28,0.2);
          position: relative;
          width: 100%;
          max-width: 980px;
          aspect-ratio: 980 / 560;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          background:
            radial-gradient(circle at 14% 20%, var(--bg-glow-amber), transparent 38%),
            radial-gradient(circle at 86% 78%, var(--bg-glow-teal), transparent 42%),
            var(--bg);
          font-family: Inter, system-ui, -apple-system, sans-serif;
          color: var(--ink);
        }
        .trd-root * { box-sizing: border-box; }

        .trd-grain {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1.4px);
          background-size: 26px 26px;
          opacity: 0.5;
          pointer-events: none;
        }

        .trd-input {
          position: absolute;
          left: 4%;
          top: 50%;
          transform: translateY(-50%);
          width: 16%;
          min-width: 108px;
          padding: 14px 12px;
          border-radius: 12px;
          background: linear-gradient(150deg, #2A2420, #15110E);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }
        .trd-input .trd-eyebrow { color: rgba(255,255,255,0.5); }
        .trd-input .trd-label { font-weight: 800; font-size: 13px; letter-spacing: 0.02em; margin-top: 4px; color: #F9F8F6; }
        .trd-input .trd-sub { font: 700 10px/1.4 "JetBrains Mono", monospace; color: rgba(255,255,255,0.5); margin-top: 6px; letter-spacing: 0.04em; }

        .trd-glassbox {
          position: absolute;
          left: 24%;
          top: 10%;
          width: 52%;
          height: 80%;
          border-radius: 22px;
          background: linear-gradient(155deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015));
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(2px);
          box-shadow:
            inset 0 0 60px rgba(255,255,255,0.03),
            0 30px 60px rgba(0,0,0,0.45);
        }
        .trd-glassbox::before {
          content: "transparent by design";
          position: absolute;
          top: 14px; left: 22px;
          font: 800 10px/1 "JetBrains Mono", monospace;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.34);
        }

        .trd-pane {
          position: absolute;
          width: 27%;
          border-radius: 14px;
          padding: 14px 14px 12px;
          border: 1px solid rgba(255,255,255,0.14);
          opacity: 0;
          animation: trd-paneIn 6s ease-in-out infinite;
        }
        .trd-pane .trd-tag {
          display: inline-block;
          font: 800 9px/1 "JetBrains Mono", monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 7px;
          border-radius: 5px;
          margin-bottom: 8px;
        }
        .trd-pane .trd-rule {
          font: 700 12.5px/1.35 Inter, sans-serif;
          color: var(--ink);
        }
        .trd-pane .trd-meta {
          margin-top: 7px;
          font: 700 9.5px/1.3 "JetBrains Mono", monospace;
          color: rgba(255,255,255,0.42);
          letter-spacing: 0.04em;
        }

        .trd-pane--constraint {
          left: 6%; top: 12%;
          background: linear-gradient(150deg, rgba(255,122,69,0.16), rgba(255,122,69,0.04));
          animation-delay: 0s;
        }
        .trd-pane--constraint .trd-tag { background: rgba(255,122,69,0.22); color: var(--amber); }

        .trd-pane--pattern {
          left: 36%; top: 40%;
          background: linear-gradient(150deg, rgba(61,214,196,0.16), rgba(61,214,196,0.04));
          animation-delay: 2s;
        }
        .trd-pane--pattern .trd-tag { background: rgba(61,214,196,0.2); color: var(--teal); }

        .trd-pane--tradeoff {
          left: 6%; top: 68%;
          background: linear-gradient(150deg, rgba(255,255,255,0.13), rgba(255,255,255,0.03));
          animation-delay: 4s;
        }
        .trd-pane--tradeoff .trd-tag { background: rgba(255,255,255,0.16); color: #fff; }

        @keyframes trd-paneIn {
          0%   { opacity: 0; transform: translateY(8px) scale(0.97); }
          6%   { opacity: 1; transform: translateY(0) scale(1); }
          30%  { opacity: 1; }
          36%  { opacity: 0.22; }
          100% { opacity: 0.22; }
        }

        .trd-trailsvg { position: absolute; inset: 0; z-index: 3; }
        .trd-trail {
          fill: none;
          stroke: var(--line);
          stroke-width: 2.5;
          stroke-dasharray: 7 9;
          animation: trd-dash 1.4s linear infinite;
        }
        @keyframes trd-dash { to { stroke-dashoffset: -32; } }

        .trd-pulse {
          fill: #fff;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.95));
          offset-rotate: 0deg;
        }
        .trd-pulse--1 { offset-path: path("M40 280 C 130 280 150 175 250 175"); animation: trd-run 6s linear infinite; }
        .trd-pulse--2 { offset-path: path("M250 175 C 330 175 350 330 470 330"); animation: trd-run 6s linear infinite 2s; }
        .trd-pulse--3 { offset-path: path("M470 330 C 560 330 580 470 680 470"); animation: trd-run 6s linear infinite 4s; }
        @keyframes trd-run {
          0%   { offset-distance: 0%; opacity: 0; }
          4%   { opacity: 1; }
          30%  { opacity: 1; }
          36%  { opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        .trd-output {
          position: absolute;
          right: 4%;
          top: 50%;
          transform: translateY(-50%);
          width: 19%;
          min-width: 130px;
          padding: 16px 14px;
          border-radius: 14px;
          background: linear-gradient(150deg, #ffa073, var(--amber-deep));
          box-shadow: 0 18px 0 rgba(0,0,0,0.18), 0 26px 40px rgba(255,122,69,0.18);
          text-align: left;
        }
        .trd-output .trd-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(255,255,255,0.28);
          margin-bottom: 8px;
          position: relative;
        }
        .trd-output .trd-check::before {
          content: "";
          position: absolute;
          width: 11px; height: 6px;
          border-left: 2.5px solid #fff;
          border-bottom: 2.5px solid #fff;
          top: 7px; left: 5px;
          transform: rotate(-45deg);
        }
        .trd-output .trd-label { font-weight: 800; font-size: 13px; color: #1d1004; }
        .trd-output .trd-sub { margin-top: 5px; font: 700 9.5px/1.4 "JetBrains Mono", monospace; color: rgba(29,16,4,0.62); letter-spacing: 0.03em; }

        .trd-eyebrow {
          font: 800 9.5px/1 "JetBrains Mono", monospace;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* Tablet range — keep the side-by-side layout but breathe more room */
        @media (max-width: 900px) {
          .trd-root { aspect-ratio: 980 / 620; }
          .trd-input, .trd-output { width: 18%; min-width: 96px; }
          .trd-pane .trd-rule { font-size: 11.5px; }
          .trd-pane .trd-meta { font-size: 8.5px; }
        }

        /* Phone range — stack everything vertically */
        @media (max-width: 640px) {
          .trd-root {
            aspect-ratio: auto;
            height: auto;
            border-radius: 18px;
            padding: 20px 14px;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .trd-input, .trd-output {
            position: static;
            transform: none;
            width: 100%;
            min-width: 0;
            margin: 0;
          }
          .trd-glassbox {
            position: static;
            width: 100%;
            height: auto;
            left: auto; top: auto;
            padding: 36px 14px 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .trd-glassbox::before {
            top: 12px; left: 14px;
          }
          .trd-pane {
            position: static;
            width: 100%;
            left: auto !important;
            top: auto !important;
            opacity: 1;
            animation: none;
          }
          .trd-trailsvg, .trd-pulse { display: none; }
        }

        @media (max-width: 380px) {
          .trd-input .trd-label,
          .trd-output .trd-label { font-size: 12px; }
          .trd-pane .trd-rule { font-size: 12px; }
        }
      `}</style>

      <div className="trd-grain" aria-hidden="true" />

      <div className="trd-input">
        <div className="trd-eyebrow">incoming</div>
        <div className="trd-label">Tue 6–10pm shift</div>
        <div className="trd-sub">needs 1 closer</div>
      </div>

      <div className="trd-glassbox" aria-hidden="true">
        <div className="trd-pane trd-pane--constraint">
          <span className="trd-tag">Constraint satisfied</span>
          <div className="trd-rule">Max 5 consecutive days respected</div>
          <div className="trd-meta">rule #14 · hard limit</div>
        </div>

        <div className="trd-pane trd-pane--pattern">
          <span className="trd-tag">Pattern matched</span>
          <div className="trd-rule">Closes Tuesdays 80% of the time</div>
          <div className="trd-meta">12-week history</div>
        </div>

        <div className="trd-pane trd-pane--tradeoff">
          <span className="trd-tag">Trade-off made</span>
          <div className="trd-rule">Picked over Sam to balance weekend load</div>
          <div className="trd-meta">fairness +0.03</div>
        </div>
      </div>

      <svg className="trd-trailsvg" viewBox="0 0 980 560" preserveAspectRatio="none" aria-hidden="true">
        <path className="trd-trail" d="M40 280 C 130 280 150 175 250 175" />
        <path className="trd-trail" d="M250 175 C 330 175 350 330 470 330" />
        <path className="trd-trail" d="M470 330 C 560 330 580 470 680 470" />
        <path className="trd-trail" d="M680 470 C 760 470 800 280 935 280" opacity="0.7" />
        <circle className="trd-pulse trd-pulse--1" r="5" />
        <circle className="trd-pulse trd-pulse--2" r="5" />
        <circle className="trd-pulse trd-pulse--3" r="5" />
      </svg>

      <div className="trd-output">
        <div className="trd-check" />
        <div className="trd-label">Jordan — assigned</div>
        <div className="trd-sub">3 reasons attached</div>
      </div>
    </div>
  );
}