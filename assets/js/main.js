document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-center");

  if (!logo) return;

  logo.style.position = "absolute";
  logo.style.top = "50%";
  logo.style.left = "50%";
  logo.style.transform = "translate(-50%, -50%)";
  logo.style.width = "300px";
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".menu-toggle");

    sidebar.classList.toggle("active");
    button.classList.toggle("open");
}