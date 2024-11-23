let heading1 = document.getElementById("firstHeading");
let heading2 = document.getElementById("secondHeading");
function myClock() {
    let time = new Date();
    heading1.innerHTML = time.toLocaleTimeString();
    heading2.innerHTML = time.toLocaleDateString();
}
setInterval(myClock, 1000);