let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flipButton");
let resetButton = document.querySelector("#resetButton");


flipButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    
});