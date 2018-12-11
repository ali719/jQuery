/**
 * Created by Administrator on 2018/12/10.
 */
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true, // 循环模式选项
    autoplay: true,//自动轮播
    effect:'fade',
    delay:1000,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})

$(function () {
  $.get('http://localhost:3000/index',function (data) {
    console.log(data);
    $('.shopList').append(template('shopList',{data:data}))
    $('.information').append(template('information',{data:data}))
  })
})