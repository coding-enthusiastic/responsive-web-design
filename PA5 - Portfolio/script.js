function Dropdown() {
  const menu = document.getElementById("nav-items");
  const show = menu.style.visibility === "hidden" ? "visible" : "hidden";
  menu.style.visibility = show;
}
