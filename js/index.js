let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flipButton");
let resetButton = document.querySelector("#resetButton");



flipButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    
    if(i){
        setTimeout(function() {
            coin.style.animation = "spinHeads 3s forwards";
        }, 100);
        tails++;
    }else{
        setTimeout(function() {
            coin.style.animation = "spinTails 3s forwards";
        }, 100);
        heads++;
    }
    setTimeout(updateCount, 3000);
    disableButton();
});

function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    }, 3000);
}

function updateCount(){
    document.querySelector("#headsCount").textContent = `Heads: ${heads}`
    document.querySelector("#tailsCount").textContent = `Tails: ${tails}`
}

resetButton.addEventListener('click', () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateCount();
})