const merah = document.querySelector('.merah');
const kuning = document.querySelector('.kuning');
const hijau = document.querySelector('.hijau');

function turnOnRed() {
  merah.classList.add('on');
  kuning.classList.remove('on');
  hijau.classList.remove('on');
  setTimeout(turnOnYellow, 3000);
}

function turnOnYellow() {
  merah.classList.remove('on');
  kuning.classList.add('on');
  hijau.classList.remove('on');
  setTimeout(turnOnGreen, 2000);
}

function turnOnGreen() {
  merah.classList.remove('on');
  kuning.classList.remove('on');
  hijau.classList.add('on');
  setTimeout(turnOnRed, 3000);
}

turnOnRed();