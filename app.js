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

function home() {
  app.innerHTML = `
    <h1>Hi, I'm Shakthivel 👋</h1>
    <p>Aspiring Endpoint / System Engineer</p>
    <a class="button" onclick="navigate('/projects')">View Projects</a>
  `;
}

function projects() {
  app.innerHTML = `
    <h2>Projects</h2>
    <div class="card">Personal Health Guardian</div>
    <div class="card">CKD Prediction System</div>
  `;
}

function certificates() {
  app.innerHTML = `
    <h2>Certifications</h2>
    <div class="card">Deloitte Australia – Data Analytics</div>
    <div class="card">Deloitte Australia – Cyber</div>
    <div class="card">Deloitte Australia – Technology</div>
  `;
}

function resume() {
  app.innerHTML = `
    <h2>Resume</h2>
    <a class="button" href="assets/resume.pdf" target="_blank">Download Resume</a>
  `;
}

function contact() {
  app.innerHTML = `
    <h2>Contact</h2>
    <p>Email: shakthivel2k4@gmail.com</p>
    <p>Phone: +91 7305828508</p>
  `;
}

render(location.pathname);
