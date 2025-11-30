

const About = () => {
  return (
    <>
      <div className="about-section">

        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <img src="rutuja.jpeg" alt="Rutuja" className="about-photo" />
        </div>

        {/* RIGHT SIDE GLASS CARD */}
        <div className="about-right glass-card">
          <h2 className="about-title">About Me</h2>

          <p>
            Hi, I’m <b>Rutuja Nandkhile</b>, an MCA graduate and a passionate Frontend Web
            Developer with experience building modern and responsive web
            applications.
          </p>

          <p>
            I enjoy converting ideas into clean, functional UI using technologies
            like <b>React, AngularJS, JavaScript, HTML, CSS, and Bootstrap</b>.
          </p>

          <p>
            My goal is to continue growing as a developer and contribute to
            impactful projects where I can combine creativity and technical
            skills to deliver quality results.
          </p>
        </div>

      </div>
    </>
  );
};

export default About;
