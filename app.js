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

function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

function render(path) {
  setActiveTab(path);

  if (path === "/") home();
  else if (path === "/about") about();
  else if (path === "/projects") projects();
  else if (path === "/certificates") certificates();
  else if (path === "/resume") resume();
  else if (path === "/contact") contact();
  else home();

  setTimeout(revealOnScroll, 100);
}

/* HOME */
function home() {
  app.innerHTML = `
    <section class="hero reveal">
      <img src="assets/profile.jpg" />
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
    <h2 class="reveal">About Me</h2>
    <div class="card reveal">
      <p>
        Computer Science graduate with strong foundations in software development,
        cloud computing, AI, and data analytics. Passionate about building scalable
        real-world solutions and continuous learning.
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
    <h2 class="reveal">Projects</h2>

    <div class="card reveal">
      <h3>Personal Health Guardian</h3>
      <p>AI system to extract medical data from PDFs and generate insights.</p>
    </div>

    <div class="card reveal">
      <h3>CKD Early Diagnosis System</h3>
      <p>Machine learning model with explainable AI.</p>
    </div>
  `;
}

/* CERTIFICATES */
function certificates() {
  app.innerHTML = `
    <h2 class="reveal">Certificates</h2>

    <div class="card reveal">
      <h3>Deloitte Australia – Data Analytics</h3>
      <p>Tableau dashboards and Excel analysis.</p>
    </div>

    <div class="card reveal">
      <h3>Deloitte Australia – Cyber</h3>
      <p>Log analysis and breach investigation.</p>
    </div>
  `;
}

/* RESUME */
function resume() {
  app.innerHTML = `
    <h2 class="reveal">Resume</h2>
    <div class="card reveal">
      <a class="button" href="assets/resume.pdf" target="_blank">Download Resume</a>
    </div>
  `;
}

/* CONTACT */
function contact() {
  app.innerHTML = `
    <h2 class="reveal">Contact</h2>
    <div class="card reveal">
      <p>Email: shakthivel2k4@gmail.com</p>
      <p>Phone: +91 73058 28508</p>
    </div>
  `;
}

render(location.pathname);
