require('!style!css!./reset.css');
require('!style!css!./swiper.css');
require('!style!css!sass!./main.scss');

var mySwiper = new Swiper('#mainSwiper', {
    speed: 400,
    direction: 'vertical'
});
var mySwiperSub = new Swiper('#subSwiper', {
    speed: 400,
    direction: 'horizontal',
    initialSlide: 1
});
var subscribes = document.getElementsByClassName('btn-subscribe');
subscribes = Array.prototype.slice.call(subscribes);
subscribes.forEach(function(element,index){
  element.addEventListener('touchstart', function(e){
    mySwiper.slideTo(6);
  })
});
