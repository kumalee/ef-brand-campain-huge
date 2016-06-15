require('./main.scss');
require('./main-image.scss');
require('./swiper.min.js');

var mySwiper = new Swiper('#mainSwiper', {
    direction: 'vertical'
});
new Swiper('#subSwiper', {
    direction: 'horizontal',
    initialSlide: 1
});
var mySwiperThird = new Swiper('#thirdSwiper', {
    direction: 'horizontal',
    initialSlide: 0,
    effect: 'fade',
    fade: {
      crossFade: false
    }
});
var subscribes = document.getElementsByClassName('btn-subscribe');
subscribes = Array.prototype.slice.call(subscribes);
subscribes.forEach(function(element,index){
  element.addEventListener('touchstart', function(e){
    mySwiper.slideTo(6);
  })
});
document.getElementById('btn-campaign-reward').addEventListener('touchstart', function(e){
  mySwiperThird.slideTo(1);
});
document.getElementsByClassName('campaign-detail-cover')[0].addEventListener('touchstart', function(e){
  mySwiperThird.slideTo(0);
});
document.getElementsByClassName('campaign-detail-content')[0].addEventListener('touchstart', function(e){
  mySwiperThird.slideTo(0);
});
