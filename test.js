window.onload = function () {
    var x = document.getElementById("nameInput");
    var button = document.getElementById("confirmButton");

    button.onclick = function () {
      x.parentNode.removeChild(x);

      let animalresult = [
        (`隻豬`),
        (`隻狗`),
        (`隻貓`),
      ]

      let randomIndex = Math.floor( animalresult.length * Math.random() );
      let say = animalresult[ randomIndex ];

      let p = document.createElement("p");
      p.innerHTML = (`你是一${say}`);
      let div = document.getElementById("animal");
      div.appendChild(p);

    }
  } 