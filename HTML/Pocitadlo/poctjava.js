  let cislo = document.getElementById("cislo");
  let btnReset = document.getElementById("btnReset");
  let btnPlus = document.getElementById("btnplus");
  let btnMinus = document.getElementById("btnminus");

  btnReset.addEventListener("click", function() {
    cislo.innerText = "0";
    cislo.style.color = "white";
  });

  btnPlus.addEventListener("click", function() {
    let aktualniHodnota = parseInt(cislo.innerText);
    cislo.innerText = aktualniHodnota + 1;
    if (aktualniHodnota + 1 > 0){
      cislo.style.color = "green";
    }
    else if (aktualniHodnota + 1 == 0) {
        cislo.style.color = "white";
    }
    else
    cislo.style.color = "red";  
    if (aktualniHodnota + 1 == 69 || aktualniHodnota + 1 == -69) {
      cislo.style.color = "pink";
  }  
  });

  btnMinus.addEventListener("click", function() {
    let aktualniHodnota = parseInt(cislo.innerText);
    cislo.innerText = aktualniHodnota - 1;
    if (aktualniHodnota - 1 < 0){
      cislo.style.color = "red";
    }
    else if (aktualniHodnota - 1 == 0) {
      cislo.style.color = "white"; 
  }
  else
  cislo.style.color = "green";
  if (aktualniHodnota - 1 == 69 || aktualniHodnota - 1 == -69) {
    cislo.style.color = "pink";
}

  });