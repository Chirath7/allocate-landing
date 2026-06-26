import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inputStyle = {
  width: "100%",
  background: "var(--panel-2)",
  border: "1px solid var(--line)",
  borderRadius: 4,
  padding: "12px 14px",
  color: "var(--text)",
  fontSize: 14,
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  colorScheme: "light"
};

const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 8,
  display: "block",
};

const required = <span style={{ color: "var(--amber)" }}> *</span>;

export default function DemoRequest({ onBack, onNavClick }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    useCase: "",
    puzzleSize: "",
    message: "",
    heardFrom: "",
  });
  const handleChange = (field) => (e) => {
  setFormData({ ...formData, [field]: e.target.value });
  };

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(false);

  try {
        const response = await fetch("https://formspree.io/f/mrewpzrr", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        setSubmitted(true);
        } else {
        setError(true);
        }
    } catch (err) {
        setError(true);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onDemoClick={onBack} onLogoClick={onBack} onNavClick={onNavClick} />

      <div className="wrap demo-layout">
        {/* LEFT — intro copy */}
        <div>
          <span
            className="mono back-link"
            onClick={onBack}
            style={{
              fontSize: 13,
              color: "var(--text-dim)",
              cursor: "pointer",
              display: "inline-block",
              marginBottom: 32,
            }}
          >
            ← Back to home
          </span>

          <h1
            className="mono"
            style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.3, marginBottom: 28, lineHeight: 1.2 }}
          >
            Any complexity, we help you solve it.
          </h1>

          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 18 }}>In half an hour, we will:</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Dissect your challenge",
              "Demonstrate our solution",
              "Set up a free proof of concept",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, color: "var(--text-dim)", fontSize: 15 }}>
                <span style={{ color: "var(--cyan)" }} className="mono">/</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form card */}
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: 40,
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div className="mono" style={{ fontSize: 13, color: "var(--cyan)", letterSpacing: 1, marginBottom: 14 }}>
                REQUEST RECEIVED
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Thanks — we'll be in touch.</h2>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5 }}>
                Someone from our team will reach out within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="name-fields">
                <div>
                  <label style={labelStyle}>First name{required}</label>
                  <input required type="text" style={inputStyle} value={formData.firstName} onChange={handleChange("firstName")} />
                </div>
                <div>
                  <label style={labelStyle}>Last name{required}</label>
                  <input required type="text" style={inputStyle} value={formData.lastName} onChange={handleChange("lastName")} />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Email{required}</label>
                <input required type="email" style={inputStyle} value={formData.email} onChange={handleChange("email")} />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>What is your use case?</label>
                <select style={inputStyle} value={formData.useCase} onChange={handleChange("useCase")}>
                  <option value="" disabled>Please select</option>
                  <option>Workforce scheduling</option>
                  <option>Capacity / booking optimization</option>
                  <option>Fleet & routing</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>How big is your planning puzzle?</label>
                <select style={inputStyle} value={formData.puzzleSize} onChange={handleChange("puzzleSize")}>
                  <option value="" disabled>Please select</option>
                  <option>Under 50 resources</option>
                  <option>50 – 500 resources</option>
                  <option>500 – 5,000 resources</option>
                  <option>5,000+ resources</option>
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Message{required}</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }} value={formData.message} onChange={handleChange("message")} />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>How did you hear about Allocate?{required}</label>
                <select required style={inputStyle} value={formData.heardFrom} onChange={handleChange("heardFrom")}>
                  <option value="" disabled>Please select</option>
                  <option>Search engine</option>
                  <option>Referral</option>
                  <option>Social media</option>
                  <option>Other</option>
                </select>
              </div>

              <p style={{ color: "var(--text-dim)", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }}>
                Allocate needs the contact information you provide to us to contact you about our
                products and services. For more information, please review our{" "}
                <span style={{ color: "var(--cyan)", cursor: "pointer" }}>Privacy Policy</span>.
              </p>

              {error && (
                <p style={{ color: "var(--amber)", fontSize: 13, marginBottom: 16 }}>
                    Something went wrong — please try again.
                </p>
               )}

              <button
                type="submit"
                disabled={loading}
                className="mono demo-btn solid"
                style={{
                    background: "var(--amber)",
                    color: "var(--bg)",
                    border: "1px solid var(--amber)",
                    borderRadius: 4,
                    padding: "12px 28px",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                }}
                >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}