function myFunction() {
    var x = document.getElementById("dropdown_menu");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }