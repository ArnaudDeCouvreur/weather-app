const hourEl = document.querySelector(".js-hour")
const dayEl = document.querySelector(".js-day")
const dateEl = document.querySelector(".js-date")

const weekDagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const maanden =  ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];

function updateTime() {
    const now = new Date();
    const hoursInt = now.getHours();
    const minutesInt = now.getMinutes();
    const dayInt = now.getDay();
    const dateInt = now.getDate();
    const monthInt = now.getMonth();
    const yearInt = now.getFullYear();

    const clockStr = `${hoursInt.toString().padStart(2, '0')}:${minutesInt.toString().padStart(2, '0')}`;
    const dayStr = weekDagen[dayInt];
    const dateStr = `${dateInt.toString()} ${maanden[monthInt]} ${yearInt.toString()}`;

    hourEl.innerText = clockStr;
    dayEl.innerText = dayStr;
    dateEl.innerText = dateStr;
}

updateTime();
setInterval(updateTime, 1000);