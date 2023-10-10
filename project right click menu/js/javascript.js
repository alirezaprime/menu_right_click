const contextMenu = document.querySelector(".container");
const submenu = document.querySelector(".share-menu");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.clientX;
  let y = e.clientY;
  let winWidth = window.innerWidth;
  let winheight = window.innerHeight;

  let cmWidth = contextMenu.offsetWidth;
  let cmheight = contextMenu.offsetHeight;

  if (x > winWidth - cmWidth) {
    x = winWidth - cmWidth;
  } else {
    x = x;
  }
  if (y > winheight - cmheight) {
    y = winheight - cmheight;
  } else {
    y = y;
  }

  if (x > winWidth - cmWidth - submenu.offsetWidth) {
    submenu.style.left = "-170px";
  } else {
    submenu.style.left = "260px";
  }
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
