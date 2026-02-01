const app = document.getElementById("app");

function navigate(path) {
  history.pushState({}, "", path);
  render(path);
}

window.onpopstate = () => render(location.pathname);

function render(path) {
  if (path === "/") home();
  else if (path === "/projects") projects();
  else if (path === "/certificates") certificates();
  else if (path === "/resume") resume();
  else if (path === "/contact") contact();
  else home();
}

/* SCREENS */

function home() {
  app.innerHTML = `
    <section class="hero">
      <img src="assets/profile.jpg">
      <h1>Shakthivel K</h1>
      <p>Software • Cloud • Data • Cyber</p>
      <button class="hero-btn" onclick="navigate('/projects')">View My Work</button>
    </section>
  `;
}

function projects() {
  app.innerHTML = `
    <h2>Projects</h2>

    <div class="card hover-card">
      <h3>Personal Health Guardian</h3>
      <p>AI-driven health insights from medical PDF reports.</p>
    </div>

    <div class="card hover-card">
      <h3>CKD Early Diagnosis System</h3>
      <p>Machine learning based disease prediction system.</p>
    </div>
  `;
}

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
  `;
}

function resume() {
  app.innerHTML = `
    <h2>Resume</h2>
    <div class="card">
      <iframe src="assets/resume.pdf" width="100%" height="600px"></iframe>
    </div>
  `;
}

function contact() {
  app.innerHTML = `
    <h2>Contact</h2>

    <div class="card">
      <div class="contact-item">
        <i class="fas fa-phone"></i> <span>+91 73058 28508</span>
      </div>

      <div class="contact-item">
        <i class="fab fa-whatsapp"></i>
        <a href="https://wa.me/917305828508" target="_blank">WhatsApp</a>
      </div>

      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:shakthivel2k4@gmail.com">shakthivel2k4@gmail.com</a>
      </div>

      <div class="contact-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/Shakthivel29" target="_blank">GitHub</a>
      </div>
    </div>
  `;
}

render(location.pathname);
