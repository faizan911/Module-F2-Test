const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const form = document.getElementById("form");
const displayUsername = document.getElementById("displayUsername");
const dice = document.getElementById("dice");
const diceValue = document.getElementById("diceValue");
const totaldicevalue = document.getElementById("totaldicevalue");
const coupon = document.getElementById("coupon");
const tryAgain = document.getElementById("tryAgain");
const badLuck = document.getElementById("badluck");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const clicklastimage = document.getElementById("clicklastimage");


let diceRolls = [];
let tries = 0;

img1.addEventListener("click", function() {
  form.style.display = "block";
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  displayUsername.innerHTML = `Username: ${usernameInput.value}`;
  form.style.display = "none";
});

img2.addEventListener("click", function() {
  displayUsername.style.display = "block";
});

img3.addEventListener("click", function() {
    if (img3Clicked) {
      return;
    }
    img3Clicked = true;
    dice.style.display = "block";
  });
let total = 0;
let clickCount0 = 0;
dice.addEventListener("click", function() {
  if (clickCount0 < 3) {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    total += diceValue;
    clickCount0++;
    document.getElementById("rollCount").innerHTML = clickCount0;
    document.getElementById("diceValue").innerHTML = `${diceValue}`;
    totaldicevalue.innerHTML = `${total}`;
  }
  if (clickCount0 === 3) {
    if (total > 10) {
        displayUsername.style.display = "none";
        clicklastimage.innerHTML = "Click On Last Image to generate coupon";
    } else{
      tryAgain.style.display = "block";
      tryAgain.addEventListener("click", function() {
        tryAgain.style.display = "none";
        dice.style.display = "block";
        document.getElementById("rollCount").innerHTML = 0;
        document.getElementById("diceValue").innerHTML = 0;
        totaldicevalue.innerHTML = 0;
        total = 0;
        clickCount0 = 0;
        diceValue = Math.floor(Math.random() * 6) + 1;
        total += diceValue;
        clickCount0++;
        document.getElementById("rollCount").innerHTML = clickCount0;
        document.getElementById("diceValue").innerHTML = `${diceValue}`;
        totaldicevalue.innerHTML = `${total}`;
        if(total > 10){
            dice.style.display = "none";
            displayUsername.style.display = "none";
            clicklastimage.innerHTML = "Click On Last Image to generate coupon";
        }else{
            img4.style.pointerEvents = "none";
            dice.style.display = "none";
            displayUsername.style.display = "none";
            badLuck.style.display = "block";
        }
    });
    }
  }
});

  
img4.addEventListener("click", function() {
    const couponCode = Math.floor(Math.random() * 100000000000) + 100000000000;
    coupon.innerHTML = `Coupon Code: ${couponCode}`;
    coupon.style.display = "block";
  });  


let clickCount = 0;
let stage = 1;

img1.addEventListener("click", function() {
  if (clickCount === 0) {
    form.style.display = "block";
    img1.style.pointerEvents = "none";
    img1.style.cursor = "default";
    clickCount++;
  }
    stage = 2;
    img2.style.pointerEvents = "auto";
    img3.style.pointerEvents = "none";
    img4.style.pointerEvents = "none";
});

img2.addEventListener("click", function() {
  if (clickCount === 1) {
    displayUsername.style.display = "block";
    img2.style.pointerEvents = "none";
    img2.style.c = "default";
    clickCount++;
  }
  if (stage !== 2) return;
  stage = 3;
  img3.style.pointerEvents = "auto";
  img4.style.pointerEvents = "none";
});

img3.addEventListener("click", function() {
  if (clickCount === 2) {
    dice.style.display = "block";
    img3.style.pointerEvents = "none";
    img3.style.cursor = "default";
    clickCount++;
  }
  if (stage !== 3) return;
  stage = 4;
  img4.style.pointerEvents = "auto";
});

img4.addEventListener("click", function() {
  if (clickCount === 3) {
    coupon.style.display = "block";
    img4.style.pointerEvents = "none";
    img4.style.cursor = "default";
    clickCount++;
  }
  if (stage !== 4) return;
});

img2.style.pointerEvents = "none";
img3.style.pointerEvents = "none";
img4.style.pointerEvents = "none";

