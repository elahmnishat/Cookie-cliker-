const camera = document.getElementById("camera");
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream){
    camera.src0ject = stream;
});

let cookies = 0;

const counter =
 document.getElementById("counter");
const button =
 document.getElementById("cookieBtn");

button.addEventListener ("click",
    function() {
    cookies = cookies + 1;
    counter.textContent =
     "Cookies: " + cookies;
    }
);

let clickPower = 1;
 const multiplierBtn = document.getElementById("multiplierBtn");

multiplierBtn.addEventListener("click", function() {
    if (cookies >= 25) {
        cookies = cookies - 25;
        clickPower = clickPower + 1;
        counter.textContent =
         "Cookies are currently: " + cookies;
    }
}
); 