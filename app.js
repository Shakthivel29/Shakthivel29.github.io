const app = document.getElementById("app");

function navigate(path) {
  history.pushState({}, "", path);
  render(path);
}

window.onpopstate = () => render(location.pathname);

function setActiveTab(path) {
  document.querySelectorAll("#nav li").forEach(li => {
    li.classList.toggle("active", li.dataset.path === path);
  });
}

function render(path) {
  setActiveTab(path);

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
      <img src="assets/profile.jpg" alt="Profile Photo" />
      <div>
        <h1>Shakthivel K</h1>
        <h3>B.E Computer Science Engineering (2025)</h3>
        <p>Software • Cloud • AI/ML • Data Analytics</p>
        <a class="button" onclick="navigate('/projects')">View Projects</a>
      </div>
    </section>
  `;
}

/* ABOUT */
function about() {
  app.innerHTML = `
    <h2>About Me</h2>
    <div class="card">
      <p>
        I am a Computer Science graduate with strong foundations in software
        development, cloud computing, artificial intelligence, and data analytics.
        I enjoy building scalable, real-world solutions and continuously upskilling.
      </p>
      <div>
        <span class="tag">Python</span>
        <span class="tag">SQL</span>
        <span class="tag">AWS</span>
        <span class="tag">OCI</span>
        <span class="tag">Git</span>
        <span class="tag">Linux</span>
      </div>
    </div>
  `;
}

/* PROJECTS */
function projects() {
  app.innerHTML = `
    <h2>Projects</h2>

    <div class="card">
      <h3>Personal Health Guardian</h3>
      <p>AI system to analyze medical PDFs and generate insights.</p>
    </div>

    <div class="card">
      <h3>CKD Early Diagnosis System</h3>
      <p>ML-based prediction system with explainable AI.</p>
    </div>
  `;
}

/* CERTIFICATES */
function certificates() {
  app.innerHTML = `
    <h2>Certificates</h2>

    <div class="card">
      <h3>Deloitte Australia – Data Analytics</h3>
      <p>Tableau dashboards & Excel analysis.</p>
    </div>

    <div class="card">
      <h3>Deloitte Australia – Cyber</h3>
      <p>Log analysis & breach investigation.</p>
    </div>
  `;
}

/* RESUME */
function resume() {
  app.innerHTML = `
    <h2>Resume</h2>
    <div class="card">
      <a class="button" href="assets/resume.pdf" target="_blank">Download Resume</a>
    </div>
  `;
}

/* CONTACT */
function contact() {
  app.innerHTML = `
    <h2>Contact</h2>
    <div class="card">
      <p>Email: shakthivel2k4@gmail.com</p>
      <p>Phone: +91 73058 28508</p>
    </div>
  `;
}

render(location.pathname);
