import SectionTag from "./ui/SectionTag";

export default function OriginCard() {
  return (
    <section id="origin" className="section wrap">
      <SectionTag>The Origin</SectionTag>
      <h2 className="mono" style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14, maxWidth: 640 }}>
        An idea rooted in real operations research.
      </h2>
      <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 560, marginBottom: 48 }}>
        Allocate didn't start as a pitch deck — it started with decades of research into how
        scarce resources get scheduled.
      </p>

      <div className="origin-card">
        {/* Replace src with the real photo at /src/assets/images/professor.jpg */}
        <img
          className="origin-image"
          src="/Amal.jpg"
          alt="Prof. Jayantha K. Wickramasuriya"
          style={{
            width: 160,
            height: 160,
            borderRadius: 8,
            objectFit: "cover",
            border: "1px solid var(--line)",
            marginTop:40
          }}
        />
        <div>
          <div style={{ fontSize: 21, fontWeight: 700, marginBottom: 4 }}>
            Amal De Silva
          </div>
          <div className="mono" style={{ fontSize: 12.5, color: "var(--cyan)", letterSpacing: 0.4, marginBottom: 18 }}>
            Senior Research Scientist - Planning & Logistics at Apple
          </div>
          <p style={{ color: "var(--text-dim)", fontSize: 15, marginBottom: 20, maxWidth: 7000 }}>
            "Extensive experience in delivering optimization and analytical solutions to solve complex problems.  Highly skilled in modeling real world  problems.
             Expert in optimization and scheduling  using linear/mixed integer programming, constraint programming and heuristic techniques. Ability to communicate
              effectively with different categories of people ranging from  end users to highly skilled technical staff and senior management.
              Specialties: Mathematical Optimization (Linear Programming, Mixed Integer Programming), Data Analytics, C++ and Java Programming, Concurrent Programming, Relational Databases"
          </p>
          <div
            className="mono"
            style={{
              display: "flex",
              gap: 28,
              borderTop: "1px solid var(--line)",
              paddingTop: 16,
              fontSize: 11.5,
              color: "var(--text-dim)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <b style={{ color: "var(--text)", display: "block", fontSize: 14, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                20+ years
              </b>
              Operations Research
            </div>
            <div>
              <b style={{ color: "var(--text)", display: "block", fontSize: 14, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                40+ papers
              </b>
              Published research
            </div>
            <div>
              <b style={{ color: "var(--text)", display: "block", fontSize: 14, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Dept. of Industrial Eng.
              </b>
              University of Moratuwa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
