window.onload = function() {
  var x = document.getElementById("nameInput");
  var button = document.getElementById("confirmButton");

  button.onclick = function() {
    x.parentNode.removeChild(x);
    // 幹掉輸入框跟按鈕以免人重複操作

    let animalresult = [`隻豬`, `隻狗`, `隻貓`, `隻鱷魚`, `隻皮卡丘`];

    let randomIndex = Math.floor(animalresult.length * Math.random());
    let say = animalresult[randomIndex];
    // 我是不是可以寫成
    // let say = animalresult[ Math.floor( animalresult.length * Math.random() ) ];
    // 比較酷炫(?)

    let p = document.createElement("p");
    p.innerHTML = `你是一${say}`;
    let div = document.getElementById("animal");
    div.appendChild(p);
    // 這段是抄問問毒牙碎爪的
  };
};
