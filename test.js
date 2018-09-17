window.onload = function () {
    var x = document.getElementById("nameInput");
    var button = document.getElementById("confirmButton");
    button.onclick = function () {
      x.parentNode.removeChild(x)
    }
  } 