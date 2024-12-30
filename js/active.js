
$ (document).ready (function(){
    /* slider-active */

    
    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    /* project-active */
    $('.project-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })


    /* video-popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });


       /* blog-active */
    $('.blog-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.brand-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        margin:70,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:6
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        }
    })
})