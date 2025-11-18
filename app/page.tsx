export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Hello, I'm Your Name
      </h1>

      <h2 style={{ fontSize: "22px", color: "#555", marginBottom: "20px" }}>
        Beginner Web Developer
      </h2>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        I'm learning Next.js and building my first portfolio website.  
        I enjoy working on simple web projects and improving my coding skills.
      </p>

      <h3 style={{ marginTop: "30px", marginBottom: "10px" }}>📧 Contact Me</h3>
      <p style={{ fontSize: "18px" }}>
        Email: <a href="mailto:your@email.com">your@email.com</a>
      </p>

      <h3 style={{ marginTop: "30px", marginBottom: "10px" }}>🔗 Social Links</h3>
      <ul style={{ fontSize: "18px" }}>
        <li><a href="https://github.com/yourusername">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
      </ul>

    </main>
  );
}
