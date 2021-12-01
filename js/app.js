let home = document.getElementById('home');
let cruiser = document.getElementById('cruiser');
let carvin = document.getElementById('carvin');
let downhill = document.getElementById('downhill');

cruiser.addEventListener('click', () => {
  cruiser.classList.add('is-active');
  home.classList.remove('is-active');
  carvin.classList.remove('is-active');
  downhill.classList.remove('is-active');
})

home.addEventListener('click', () => {
  cruiser.classList.remove('is-active');
  home.classList.add('is-active');
  carvin.classList.remove('is-active');
  downhill.classList.remove('is-active');
})

carvin.addEventListener('click', () => {
  cruiser.classList.remove('is-active');
  home.classList.remove('is-active');
  carvin.classList.add('is-active');
  downhill.classList.remove('is-active');
})

downhill.addEventListener('click', () => {
  cruiser.classList.remove('is-active');
  home.classList.remove('is-active');
  carvin.classList.remove('is-active');
  downhill.classList.add('is-active');
})