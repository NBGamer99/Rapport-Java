const humburger = document.querySelector('.humburger');

humburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});