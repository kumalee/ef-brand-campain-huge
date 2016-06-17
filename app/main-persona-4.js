require('./main-persona-4.scss');
require('./main-image-persona-4.scss');
require('./swiper.min.js');

var mySwiper = new Swiper('#mainSwiper', {
    direction: 'vertical'
});
new Swiper('#subSwiper', {
    direction: 'horizontal',
    initialSlide: 1,
    loop: true
});
var subscribes = document.getElementsByClassName('btn-subscribe');
subscribes = Array.prototype.slice.call(subscribes);
subscribes.forEach(function(element,index){
  element.addEventListener('touchstart', function(e){
    mySwiper.slideTo(6);
  })
});
document.getElementById('btn-campaign-reward').addEventListener('touchstart', function(e){
  toggleDetail('block');
});
var toggleDetail = function(toggle){
  document.getElementsByClassName('campaign-detail-cover')[0].style.display = toggle;
  document.getElementsByClassName('campaign-detail-content')[0].style.display = toggle;
}
document.getElementsByClassName('campaign-detail-cover')[0].addEventListener('touchstart', function(e){
  toggleDetail('none');
});
document.getElementsByClassName('campaign-detail-content')[0].addEventListener('touchstart', function(e){
  toggleDetail('none');
});
