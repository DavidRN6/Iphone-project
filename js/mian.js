const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");

function showSidebar() {
  sidebar.style.display = "flex";
  menu.style.display = "none";
}

function hideSidebar() {
  sidebar.style.display = "none";
  menu.style.display = "block";
}
