var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].querySelector("button").addEventListener("click", function() {
    // Toggle a classe 'active' no elemento pai (div.accordion)
    this.parentElement.classList.toggle("active");

    // Exibir ou esconder o painel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}