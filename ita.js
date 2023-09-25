const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const dayD = document.getElementById('day-d');
const hourH = document.getElementById('hour-h');
const minuteM = document.getElementById('minute-m');
const secondS = document.getElementById('second-s');
const divIMG = document.querySelectorAll('.cuadro-imagen');
const buttons = document.querySelectorAll('.button');
let targetDate = new Date('2023-12-17').getTime();

buttons.forEach((el) => {
  el.classList.add('falling-button');
})

function agregarCeros(valor) {
  return valor < 10 ? `0${valor}` : valor;
}

function isElementInViewport(el, offset) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 + offset &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleElementsOnScroll() {
  buttons.forEach((el) => {
    if (isElementInViewport(el, -200)) {
      el.classList.add('falling-button');
    } else {
      el.classList.remove('falling-button');
    }
  });

  divIMG.forEach((el) => {
    if (isElementInViewport(el, 0)) {
      el.classList.remove('hidden');
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
      el.classList.add('hidden');
    }
  });
}

window.addEventListener('scroll', toggleElementsOnScroll);
toggleElementsOnScroll();

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