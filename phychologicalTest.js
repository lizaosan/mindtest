window.onload = function () {
    var x = document.getElementById("nameInput");
    var button = document.getElementById("bt");
    button.onclick = function () {
      x.parentNode.removeChild(x)
    }
  } 