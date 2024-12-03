function menuToggle() {
  var buttonIcon = document.getElementById("header");

  if (buttonIcon.className === "") {
    buttonIcon.className += "active";
    document.body.style.overflow = "hidden";
  } else {
    buttonIcon.className = "";
    document.body.style.overflow = "auto";
  }
}