// const hamb = document.getElementById("hamb");
// const menu = document.querySelector("#menu").cloneNode(1);
// hamb.addEventListener("click", hambHandler);
// function hambHandler(e) {
//     e.preventDefault();
// }

const menu = document.querySelector('.menu')
const humb = document.querySelector('.humb')
const close = document.querySelector('.close')
humb.addEventListener('click', menuActive)
function menuActive(){
    menu.classList.toggle('active')
}
close.addEventListener('click', menuClose)
function menuClose(){
    menu.classList.toggle('active')
}
const animateItems = document.querySelectorAll('.control_active');
  window.addEventListener('scroll', animActive);
  function animActive() {
    for (let index = 0; index < animateItems.length; index++) {
      const animateItem = animateItems[index];
      const animateItemHeight = animateItem.offsetHeight;
      const animStart = 4;
      const animateItemOffset = offset(animateItem).top;

      let animateItemPoint = window.innerHeight - animateItemHeight / animStart;
      if ((pageYOffset > animateItemOffset - animateItemPoint) && pageYOffset < (animateItemOffset + animateItemHeight)) {
        animateItem.classList.add('active');
      } else{
        animateItem.classList.remove('active');
      }
    }
  }
  animActive();
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
      scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
const bell = document.getElementById('bell')
const bell_block = document.querySelector('.bell_info')
bell.addEventListener('click', bellOpen)
function bellOpen() {
  bell_block.classList.toggle('active')
}
const close_bell = document.querySelector('.close_bell')
close_bell.addEventListener('click', bellClose)
function bellClose() {
  bell_block.classList.toggle('active')
}
const logo = document.querySelector('.logo')
const google = document.querySelector('.google')
logo.addEventListener('click', googleActive)
function googleActive() {
  google.classList.add('active')
}
const google_close = document.querySelector('.google_close')
google_close.addEventListener('click', googleClose)
function googleClose() {
  google.classList.remove('active')
}
const setting = document.querySelector('.setting')
const setting_i = document.querySelector('.setting_i')
setting_i.addEventListener('click', settingActive)
function settingActive(params) {
  setting_i.classList.toggle('active')
  setting.classList.toggle('active')
}