$(document).ready(function(){
    $('.tech-slider').owlCarousel({
        nav:false,
        dots:true,
        autoplay:true,
        loop:true,
        navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive:{
            0:{
                items:1,
                dots:false,
                nav:true
            },
            768:{
                items:3,
                dots:true,
                nav:false
            },
            992:{
                items:5
            },
            1200:{
                items:7
            }

        }
    });
    let i=0;
    $('.hamburger').click(function(){
        if(i==0){
        $('.ham-trigger').animate({
            left:'0px'
        });
        $(this).addClass('is-active');

        i=1;
        }else{
            $('.ham-trigger').animate({
                left:'-100%'
            }); 
        $(this).removeClass('is-active');

            i=0;
        }
    });
    $('.read-more').click(function(){
        $('.extra-content').show();
        $(this).hide();
    });

});