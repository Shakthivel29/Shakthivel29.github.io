const app = document.getElementById("app");

function navigate(path) {
  history.pushState({}, "", path);
  render(path);
}

window.onpopstate = () => render(location.pathname);

function render(path) {
  if (path === "/") home();
  else if (path === "/about") about();
  else if (path === "/projects") projects();
  else if (path === "/certificates") certificates();
  else if (path === "/resume") resume();
  else if (path === "/contact") contact();
  else home();
}

/* HOME */
function home() {
  app.innerHTML = `
    <section class="hero">
      <img src="assets/profile.jpg">
      <h1>Shakthivel K</h1>
      <p>Computer Science Engineer | Software • Cloud • Data • Cyber</p>
      <button class="hero-btn" onclick="navigate('/about')">Explore My Profile</button>
    </section>
  `;
}

/* ABOUT (LONG INTRO) */
function about() {
  app.innerHTML = `
    <h2>About Me</h2>
    <div class="card">
      <p>
        I am a B.E. Computer Science Engineering graduate (2025) with strong foundations
        in software development, object-oriented programming, cloud computing,
        data analytics, and cybersecurity.
      </p>
      <p>
        I have gained practical exposure through internships, Deloitte job simulations,
        NASSCOM certification programs, IIT Madras workshops, and AWS cloud training.
        These experiences helped me understand real-world enterprise workflows,
        SDLC practices, system-level thinking, and secure application development.
      </p>
      <p>
        I enjoy building structured, scalable solutions and continuously upgrading
        my skills to stay aligned with modern industry standards. I am actively
        seeking opportunities where I can contribute as a system or software engineer
        while growing in a collaborative environment.
      </p>
    </div>
  `;
}

/* PROJECTS */
function projects() {
  app.innerHTML = `
    <h2>Projects</h2>
    <div class="card">
      <h3>Personal Health Guardian</h3>
      <p>AI-based health insights system using Python, NLP, and ML.</p>
    </div>
    <div class="card">
      <h3>CKD Early Diagnosis System</h3>
      <p>Machine learning-based disease prediction application.</p>
    </div>
  `;
}

/* CERTIFICATES */
function certificates() {
  app.innerHTML = `
    <h2>Certificates</h2>

    <h3>Deloitte</h3>
    <a class="cert-card" href="assets/certificates/deloitte/data-analytics.pdf" target="_blank">Data Analytics Job Simulation</a>
    <a class="cert-card" href="assets/certificates/deloitte/cyber.pdf" target="_blank">Cyber Job Simulation</a>
    <a class="cert-card" href="assets/certificates/deloitte/technology.pdf" target="_blank">Technology Job Simulation</a>

    <h3>McKinsey & Company</h3>
    <a class="cert-card" href="assets/certificates/mckinsey/forward-program.pdf" target="_blank">McKinsey Forward Program</a>

    <h3>NASSCOM</h3>
    <a class="cert-card" href="assets/certificates/nasscom/data-science.pdf" target="_blank">Data Science</a>
    <a class="cert-card" href="assets/certificates/nasscom/rpa-foundation.pdf" target="_blank">RPA Foundation</a>

    <h3>IIT Madras</h3>
    <a class="cert-card" href="assets/certificates/iit/acm-rocs-workshop.pdf" target="_blank">ACM Workshop on ROCS</a>

    <h3>Amazon Web Services (AWS)</h3>
    <a class="cert-card" href="assets/certificates/aws/aws-foundations.pdf" target="_blank">AWS Cloud Foundations</a>
  `;
}

/* RESUME */
function resume() {
  app.innerHTML = `
    <h2>Resume</h2>
    <div class="card">
      <iframe src="assets/resume.pdf" width="100%" height="650px"></iframe>
    </div>
  `;
}

/* CONTACT */
function contact() {
  app.innerHTML = `
    <h2>Contact</h2>
    <div class="card">
      <p>📧 <a href="mailto:shakthivel2k4@gmail.com">shakthivel2k4@gmail.com</a></p>
      <p>📞 +91 73058 28508</p>
      <p>💬 <a href="https://wa.me/917305828508" target="_blank">WhatsApp</a></p>
      <p>🔗 <a href="https://github.com/Shakthivel29" target="_blank">GitHub</a></p>
    </div>
  `;
}

render(location.pathname);
