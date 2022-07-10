'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function removeClass() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function addClass() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', removeClass);
  btnCloseModal.addEventListener('click', addClass);
  overlay.addEventListener('click', addClass);
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      addClass();
    }
  });
}
