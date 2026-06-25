import Button from "./ui/Button";

export default function Navbar({ onDemoClick, onLogoClick, onNavClick }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(14,17,22,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap navbar-container">
        <div
          className="mono"
          onClick={onLogoClick}
          style={{ fontWeight: 700, fontSize: 18, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
        >
          <span style={{ width: 8, height: 8, background: "var(--amber)", borderRadius: 1, display: "inline-block" }} />
          ALLOCATE
        </div>
        <div className="nav-links">
          <a href="#how" onClick={(e) => { e.preventDefault(); onNavClick?.("how"); }}>How it works</a>
          <a href="#cases" onClick={(e) => { e.preventDefault(); onNavClick?.("cases"); }}>Use cases</a>
          <a href="#origin" onClick={(e) => { e.preventDefault(); onNavClick?.("origin"); }}>Origin</a>
        </div>
        <div className="nav-button">
          <Button onClick={onDemoClick}>Request a Demo</Button>
        </div>
      </div>
    </nav>
  );
}