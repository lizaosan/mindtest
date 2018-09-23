window.onload = function() {
  var x = document.getElementById("nameInput");
  var button = document.getElementById("confirmButton");

  button.onclick = function() {
    x.parentNode.removeChild(x);

    const animalresult = ["隻豬", "隻狗", "隻貓", "隻鱷魚", "隻皮卡丘"];

    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let randomIndex = getRandomInt(0, animalresult.length);
    let say = animalresult[randomIndex];
  
    let p = document.createElement("p");
    p.innerText = `你是一${say}`;
    let div = document.getElementById("animal");
    div.appendChild(p);
  };
};
