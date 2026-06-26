import SectionTag from "./ui/SectionTag";

const PRODUCTS = [
  ["Allocate Workforce", "Shift & roster scheduling", "Assign people to shifts efficiently — balancing demand, fairness, and labor rules."],
  ["Allocate Fleet", "Routing & vehicle assignment", "Match vehicles to jobs and routes, keeping every vehicle working and on time."],
  ["Allocate Capacity", "Booking & seat optimization", "Maximize utilization of fixed capacity using real demand and no-show patterns."],
];

export default function Products() {
  return (
    <section className="section wrap">
      <SectionTag>The Products</SectionTag>
      <h2 className="mono" style={{ fontSize: 0, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        One engine. Three products.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        Same optimization core underneath — purpose-built for the problem you actually have.
      </p>

      <div className="products-grid">
        {PRODUCTS.map(([name, tag, desc]) => (
          <div key={name} className="hover-card" style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8, padding: 28 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{name}</h3>
            <div className="mono" style={{ fontSize: 12, color: "var(--cyan)", letterSpacing: 0.4, marginBottom: 16 }}>
              {tag}
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: 14.5 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}