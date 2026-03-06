const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

const nav = document.getElementById("nav");
const navButtons = Array.from(nav.querySelectorAll(".nav-item"));
const panels = Array.from(document.querySelectorAll(".panel"));

function showSection(id) {
  panels.forEach(p => p.classList.remove("show"));
  const target = document.getElementById(id);
  if (target) target.classList.add("show");

  navButtons.forEach(b => b.classList.remove("active"));
  const activeBtn = navButtons.find(b => b.dataset.section === id);
  if (activeBtn) activeBtn.classList.add("active");

  // móvil: colapsa sidebar al elegir
  if (window.innerWidth <= 680) {
    sidebar.classList.add("collapsed");
    sidebarToggle.setAttribute("aria-expanded", "false");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.section));
});

sidebarToggle.addEventListener("click", () => {
  const isCollapsed = sidebar.classList.toggle("collapsed");
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
});

showSection("inicio");