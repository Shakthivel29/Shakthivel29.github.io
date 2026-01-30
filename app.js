const app = document.getElementById("app");

function navigate(path) {
  history.pushState({}, "", path);
  render(path);
}

window.onpopstate = () => {
  render(location.pathname);
};

function setActiveTab(path) {
  document.querySelectorAll("#nav li").forEach(li => {
    li.classList.toggle("active", li.dataset.path === path);
  });
}

function render(path) {
  setActiveTab(path);

  if (path === "/") home();
  else if (path === "/projects") projects();
  else if (path === "/certificates") certificates();
  else if (path === "/resume") resume();
  else if (path === "/contact") contact();
  else home();
}

/* PAGES */

function home() {
  app.innerHTML = `
    <h1>Shakthivel K</h1>
    <p>B.E. Computer Science Engineering graduate (2025) focused on Data, Cyber, Cloud, and Automation.</p>

    <div class="card">
      <h3>Core Skills</h3>
      <span class="tag">Python</span>
      <span class="tag">SQL</span>
      <span class="tag">AWS</span>
      <span class="tag">OCI</span>
      <span class="tag">Git</span>
      <span class="tag">Linux</span>
    </div>

    <a class="button" onclick="navigate('/projects')">View Projects</a>
    <a class="button" onclick="navigate('/contact')">Contact Me</a>
  `;
}

function projects() {
  app.innerHTML = `
    <h2>Projects</h2>

    <div class="card">
      <h3>Personal Health Guardian</h3>
      <p>AI-driven system that extracts medical data from PDF reports and generates insights.</p>
      <span class="tag">Python</span>
      <span class="tag">NLP</span>
    </div>

    <div class="card">
      <h3>CKD Early Diagnosis System</h3>
      <p>Machine learning model for early prediction of chronic kidney disease.</p>
      <span class="tag">ML</span>
      <span class="tag">Scikit-learn</span>
    </div>

    <div class="card">
      <h3>Fall Detection System</h3>
      <p>Real-time fall detection using OpenCV with 85% accuracy.</p>
      <span class="tag">OpenCV</span>
      <span class="tag">Python</span>
    </div>
  `;
}

function certificates() {
  app.innerHTML = `
    <h2>Certifications & Virtual Experience</h2>

    <div class="card">
      <h3>Deloitte Australia – Data Analytics</h3>
      <p>Created Tableau dashboards and derived business insights.</p>
      <span class="tag">Tableau</span>
      <span class="tag">Excel</span>
    </div>

    <div class="card">
      <h3>Deloitte Australia – Cyber</h3>
      <p>Analyzed web logs and investigated cyber security incidents.</p>
      <span class="tag">Cyber</span>
      <span class="tag">Log Analysis</span>
    </div>

    <div class="card">
      <h3>Deloitte Australia – Technology</h3>
      <p>Completed development tasks and wrote a dashboard proposal.</p>
      <span class="tag">Problem Solving</span>
    </div>
  `;
}

function resume() {
  app.innerHTML = `
    <h2>Resume</h2>
    <div class="card">
      <p>You can view or download my resume below.</p>
      <a class="button" href="assets/resume.pdf" target="_blank">Download Resume</a>
    </div>
  `;
}

function contact() {
  app.innerHTML = `
    <h2>Contact</h2>
    <div class="card">
      <p>Email: <a class="link" href="mailto:shakthivel2k4@gmail.com">shakthivel2k4@gmail.com</a></p>
      <p>Phone: <a class="link" href="tel:+917305828508">+91 73058 28508</a></p>
    </div>
  `;
}
ender(location.pathname);
