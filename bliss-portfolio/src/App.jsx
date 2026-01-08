import { useState } from "react";
import headerImg from "./assets/header.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import img1 from "./assets/gallery/img1.jpg";
import img2 from "./assets/gallery/img2.jpg";
import img3 from "./assets/gallery/img3.jpg";
import img4 from "./assets/gallery/img4.jpg";
import img5 from "./assets/gallery/img5.jpg";
import img6 from "./assets/gallery/img6.jpg";
import img7 from "./assets/gallery/img7.jpg";
import "./styles.css";
import project1 from "./assets/projects/safeway.jpg";
import project2 from "./assets/projects/urjashakti.jpg";
import project3 from "./assets/projects/portfolio.jpg";
import project4 from "./assets/projects/statathon.jpg";
import project5 from "./assets/projects/thehgium.jpg";
import project6 from "./assets/projects/iot.jpg";
import project7 from "./assets/projects/ririri.jpg";
export default function App() {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Expertise",
    "Research",
    "Projects",
    "Contact",
  ];

  return (
    <div style={{ fontFamily: '"Bodoni MT Condensed", serif' }}>
      {/* ================= HEADER ================= */}
      <header style={{ textAlign: "center", padding: "40px 0 20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 400, margin: 0 }}>
          BLISS MACHADO
        </h1>
        <p style={{ fontSize: "14px", color: "#777", marginTop: "6px" }}>
          M.S. | Urban Data Scientist
        </p>
      </header>

      {/* ================= GREY NAV BAR ================= */}
      <nav
        style={{
          backgroundColor: "#b3b3b3",
          display: "flex",
          justifyContent: "center",
          gap: "22px",
          padding: "14px 0",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        {navItems.map((item) => (
          <span
            key={item}
            onClick={() => setActiveLink(item)}
            style={{
              cursor: "pointer",
              color: activeLink === item ? "#000" : "#fff",
              fontWeight: activeLink === item ? 700 : 400,
              transition: "all 0.25s ease",
            }}
          >
            {item}
          </span>
        ))}
      </nav>

      {/* ================= HEADER IMAGE ================= */}
      <img
        src={headerImg}
        alt="Header"
        style={{
          width: "100%",
          height: "130px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* ================= HOME ================= */}
      {activeLink === "Home" && (
        <section
          style={{
            maxWidth: "900px",
            margin: "50px auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Welcome to my personal website!
          </h2>

          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8" }}>
            My name is <strong>Bliss Machado</strong>, and I am currently
            pursuing a Bachelor’s degree in Electronics and Computer Science from
            the University of Mumbai, India. I have worked on multiple
            technology-driven projects and received national-level recognition,
            including being an alumna of the Ministry of Education’s Innovation
            Cell.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.8",
              marginTop: "18px",
            }}
          >
            I am also a co-founder of <strong>SafeWay Innovations</strong>, where
            I build impactful, technology-enabled solutions. I have co-authored
            research papers published in IEEE and Springer Nature, presented at
            ICPC2T 2025 and ICAER at IIT Bombay.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.8",
              marginTop: "18px",
            }}
          >
            Beyond technology and research, I enjoy design and visual thinking,
            working with tools like Blender and Figma to translate ideas into
            meaningful digital experiences.
          </p>
        </section>
      )}

      {/* ================= ABOUT ================= */}
      {activeLink === "About" && (
        <section
          style={{
            maxWidth: "900px",
            margin: "50px auto",
            padding: "0 20px",
          }}
        >
          <h2 style={{ textAlign: "center", fontWeight: 400 }}>About Me</h2>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.8",
              marginTop: "25px",
              textAlign: "justify",
              textJustify: "inter-word",
              hyphens: "auto",
            }}
          >
            Born and raised in <strong>Vasai, Mumbai</strong>, I have developed a
            strong curiosity for understanding how technology, design, and systems
            intersect to shape the modern world. I actively engage with
            analytical and thought-provoking platforms such as <strong>Vox</strong>{" "}
            and <strong>Big Think</strong>, which have influenced my interest in
            research-driven innovation and large-scale problem solving.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.8",
              marginTop: "18px",
              textAlign: "justify",
              textJustify: "inter-word",
              hyphens: "auto",
            }}
          >
            Beyond academics, I maintain a strong affinity for sports, particularly{" "}
            <strong>badminton</strong> and <strong>chess</strong> which have
            sharpened my strategic thinking, discipline, and focus. I also possess
            a keen eye for design and enjoy translating abstract ideas into
            meaningful visual experiences using tools such as <strong>Blender</strong>{" "}
            for 3D modeling and <strong>Figma</strong> for building intuitive
            digital prototypes.
          </p>

          {/* ================= GALLERY ================= */}
          <h3
            style={{
              textAlign: "center",
              fontWeight: 400,
              letterSpacing: "1px",
              marginTop: "45px",
              marginBottom: "25px",
              color: "#333",
            }}
          >
            Gallery
          </h3>

          <div
            className="masonry"
            style={{
              columnCount: 3,
              columnGap: "18px",
            }}
          >
            {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: "100%",
                  marginBottom: "18px",
                  borderRadius: "6px",
                  breakInside: "avoid",
                  cursor: "pointer",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* ================= EXPERTISE ================= */}
      {activeLink === "Expertise" && (
        <section style={{ padding: "40px 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "20px", fontWeight: 400 }}>
            Expertise
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Please see my{" "}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red", textDecoration: "underline" }}
            >
              CV
            </a>{" "}
            for a full list of my past and current positions, education, and academic work.
          </p>
        </section>
      )}

{/* ================= RESEARCH ================= */}
{activeLink === "Research" && (
  <section style={{ padding: "40px 20px", textAlign: "center" }}>
    <h2
      style={{
        fontSize: "1.2rem",
        marginBottom: "20px",
        fontWeight: 400, // not bold
        color: "#000", // black
      }}
    >
      Research
    </h2>

    <ol
      style={{
        textAlign: "left",
        maxWidth: "800px",
        margin: "0 auto",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        fontWeight: 400,
        color: "#888",
      }}
    >
      <li style={{ color: "#000" }}>
        <span style={{ color: "#000" }}>
          <strong style={{ fontWeight: 600 }}>
            Bhushan S. Naik, Tanish V. Khot, Bliss D. Machado, and R. B. Raut
          </strong>
        </span>
        <span style={{ color: "#888" }}>
          , "IoT-Enabled Drowsiness Detection Systems for Enhanced Road Safety
          Across Diverse Vehicle Types," Fr. Conceicao Rodrigues College of
          Engineering.
        </span>{" "}
        <a
          href="https://ieeexplore.ieee.org/document/10958589"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2a2cb4ff", textDecoration: "underline" }}
        >
          Click here
        </a>
      </li>

      <li style={{ color: "#000" }}>
        <span style={{ color: "#000" }}>
          <strong style={{ fontWeight: 600 }}>
            Bhushan S. Naik, Bliss D. Machado, Tanish V. Khot
          </strong>
        </span>
        <span style={{ color: "#888" }}>
          , "Urja Shakti: A Digital Platform for Rooftop Solar Aggregation Using
          Satellite and Geospatial Intelligence," Department of Electronics and
          Computer Science, Fr. Conceicao Rodrigues College of Engineering, Mumbai,
          400050, Maharashtra, India.
        </span>{" "}
        <a
          href="YOUR_LINK_2"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2f20b7ff", textDecoration: "underline" }}
        >
          Click here
        </a>
      </li>
    </ol>
  </section>
)}
{/* ================= PROJECTS ================= */}
{activeLink === "Projects" && (
  <section
    style={{
      maxWidth: "1000px",
      margin: "60px auto",
      padding: "0 20px",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        fontWeight: 400,
        marginBottom: "40px",
      }}
    >
      Projects
    </h2>

    {/* Masonry Layout */}
    <div
      style={{
        columnCount: 3,
        columnGap: "20px",
      }}
    >
      {[
        {
          title: "Varsha Bandhan: Designing and development of an application for on spot assessment of Roof Top Rain water harvesting and artificial recharge potential and size of the RTRWH and AR.",
          desc: "A GIS and satellite-driven web platform that assesses rooftop rainwater harvesting feasibility, designs CGWB-compliant recharge structures, and generates instant multilingual DPRs with vendor and subsidy integration.",
          img: project1,
          link: "https://varsha-bandhan.vercel.app/calculator",
        },
        {
          title: "Urja Shakti: A data-driven Aggregator Platform for Decentralized Rooftop Solar Using Satellite Imaging",
          desc: "A geospatial, satellite-imagery powered aggregator that enables instant rooftop solar assessment, cost transparency, subsidy insights, and vendor comparison to accelerate decentralized solar adoption in India.",
          img: project2,
          link: "https://urjashakti-35d72.web.app/calculator",
        },
        {
          title: "PRISM: Agentic AI Platform for Automated RFP Processing",
          desc: "An agentic-AI driven system that automates RFP ingestion, requirement extraction, IS/IEC-compliant spec matching, pricing computation, and generation of submission-ready response documents within minutes.",
          img: project3,
          link: "https://prism-rfp.web.app/",
        },
        {
          title: "Nirmal Data (निर्मल डेटा)",
          desc: "A configurable AI-powered data cleaning and validation platform that automates imputation, outlier handling, and policy-driven quality checks while generating audit-ready reports for large-scale official statistics.",
          img: project4,
          link: "https://github.com/Bliss010",
        },
        {
          title: "DRISHTI AI: Generative AI-Powered Material Selection Platform",
          desc: "An agentic GenAI web platform that converts engineering requirements into standards-aware, ranked material recommendations using multi-agent workflows, simulations, and sustainability scoring.",
          img: project5,
          link: "https://github.com/Bliss010",
        },
        {
          title: "IoT-Enabled Drowsiness Detection Systems for Enhanced Road Safety Across Diverse Vehicle Types",
          desc: "Developed a driver drowsiness detection project featuring prototype, wearable, and webcam-based systems, and contributed by building the supporting mobile app for real-time monitoring, alerts, and live location sharing to enhance road safety.",
          img: project6,
          link: "https://ieeexplore.ieee.org",
        },
        {
  title: "Personal Porfolio",
  desc: "Built a responsive personal portfolio using React.js to showcase projects, research, and achievements through a clean, component-based design.",
  img: project7,
  link: "https://github.com/Bliss010", // replace if you have a live link
},

      ].map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            breakInside: "avoid",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 14px 35px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 22px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: "100%",
                display: "block",
              }}
            />

            <div style={{ padding: "14px" }}>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {project.desc}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
)}


      {/* ================= FOOTER ================= */}
      <footer
        style={{
          backgroundColor: "#1c1c1c",
          color: "#fff",
          padding: "50px 8%",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          {/* Left section: Email + icons */}
          <div>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              <span style={{ fontWeight: 600 }}>Email: </span>
              blissmachado4@gmail.com
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
              <a
                href="https://www.linkedin.com/in/bliss-machado-727a8424a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} color="white" />
              </a>
              <a
                href="https://github.com/Bliss010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} color="white" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Bliss-Machado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiResearchgate size={20} color="white" />
              </a>
            </div>
          </div>

          {/* Right section: Info */}
          <div style={{ textAlign: "right", fontSize: "14px" }}>
            <p style={{ fontWeight: 600 }}>Let’s Connect</p>
            <p>Data Science · Software · Research</p>
            <p>Mumbai, India</p>
          </div>
        </div>
      </footer>

      {/* ================= COPYRIGHT ================= */}
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#777",
          margin: "12px 0",
        }}
      >
        © 2025 Bliss Machado · All rights reserved
      </p>
    </div>
  );
}


