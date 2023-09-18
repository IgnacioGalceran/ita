const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const dayD = document.getElementById('day-d');
const hourH = document.getElementById('hour-h');
const minuteM = document.getElementById('minute-m');
const secondS = document.getElementById('second-s');

function agregarCeros(valor) {
  return valor < 10 ? `0${valor}` : valor;
}

let targetDate = new Date('2023-12-17').getTime();

let countdown = setInterval(function() {
  let currentDate = new Date().getTime();
  let timeLeft = targetDate - currentDate;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  hour.innerHTML = agregarCeros(hours);
  minute.innerHTML = agregarCeros(minutes);
  second.innerHTML = agregarCeros(seconds);

  day.innerHTML = `${days}`;
  dayD.innerHTML = 'Días';
  hourH.innerHTML = 'Horas';
  minuteM.innerHTML = 'Minutos';
  secondS.innerHTML = 'Segundos';

  if (timeLeft <= 0) {
    clearInterval(countdown);
    day.innerHTML = "0";
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    dayD.innerHTML = '';
    hourH.innerHTML = '';
    minuteM.innerHTML = '';
    secondS.innerHTML = '';
  }
}, 1000);