// Inside a .js file we define functions to make our webpage interact with the User

console.log("hello nina")
let $seconds = document.getElementById("seconds");

let $button = document.getElementById("restart");

$button.onclick = () => restartCountdown();
  
console.log($seconds);
console.log($button);

let countdown = 15;
let interval ="";

function updateCountdown(){
    interval = setInterval (() => {
    if (countdown >0){
        countdown = countdown - 1;
   updateDOM("Its working");
    }   
        else {
            clearInterval(interval);
            countdown = "boom";
            updateDOM("countdown done!");
        } 

    }, 1000);
}

  



    function updateDOM (msg){
        console.log(msg); 
        $seconds.innerText = countdown;
    }

    function restartCountdown(){
        console.log("fired")
        clearInterval(interval);
        countdown = 15;
        updateCountdown();
    }

    updateCountdown();