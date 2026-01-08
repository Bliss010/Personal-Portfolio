export default function About() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
  ];

  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "60px auto",
        padding: "0 20px",
      }}
    >
      {/* ABOUT ME */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: 400,
          marginBottom: "25px",
          fontFamily: '"Bodoni MT Condensed", serif',
        }}
      >
        About Me
      </h1>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 50px",
        }}
      >
        I enjoy working at the intersection of technology, data, and design.
        My interests span urban systems, sustainability, applied research,
        and visual storytelling. I like transforming ideas into meaningful,
        user-centric solutions while constantly learning through research,
        case studies, and creative exploration.
      </p>

      {/* GALLERY */}
      <h2
        style={{
          textAlign: "center",
          fontWeight: 400,
          marginBottom: "30px",
          fontFamily: '"Bodoni MT Condensed", serif',
        }}
      >
        Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "18px",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "6px",
            }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
