const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const imgMain = document.querySelector(".imgMain");
const project = document.querySelector(".project");

function showSidebar() {
  sidebar.style.display = "flex";
  menu.style.display = "none";
}

function hideSidebar() {
  sidebar.style.display = "none";
  menu.style.display = "block";
}

function phones(phone) {
  imgMain.src = phone;
}

function colors(color) {
  project.style.background = color;
}
