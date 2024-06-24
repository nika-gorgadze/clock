const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minuteHand = document.querySelector(".minute");
secondHand = document.querySelector(".second");
modeSwitch = document.querySelector(".mode-switch");


modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

const updateTime = () => {
    let date = new Date();
    let secToDeg = (date.getSeconds() / 60) * 360;
    let minToDeg = (date.getMinutes() / 60) * 360;
    let hrToDeg = ((date.getHours() % 12 + date.getMinutes() / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minuteHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hrToDeg}deg)`
} 

setInterval(updateTime,1000);
updateTime();