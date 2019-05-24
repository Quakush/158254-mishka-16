var modal = document.querySelector('.modal-overlay');
var buyBtn = document.querySelectorAll('.buy');

for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
  })
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal-show')) {
          modal.classList.remove('modal-show');
      }
  }
});
