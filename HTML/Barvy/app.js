const colors = ["green", "Red", "rgba(133,122,200)", "#f1025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", 
function() {
    let cislo = NahodneCislo();
    document.body.style.backgroundColor = colors[cislo];
    color.textContent = colors[cislo];

});

function NahodneCislo()
{
   return Math.floor(Math.random() * colors.length);
}
