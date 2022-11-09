"use strict";

$(document).ready(function() {
   let startPost=$('.content_header').offset().top;
    $(window).on('scroll', function(){
     if ($(window).scrollTop()>=startPost) {
         if ($('.content_header').hasClass()==false) $('.content_header').addClass('fixed');
     }
     else $('.sticky').removeClass('fixed');
    });
   });

   