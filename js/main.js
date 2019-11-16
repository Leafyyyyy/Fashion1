if ($('#back-to-top').length) {
    var scrollTrigger = 2500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
        
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: 0
        }, 1000);
    });
}
$('.daily').owlCarousel({
    
    loop:true,
    margin:10,
    nav:true,
    items: 2,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
            
        },
        415:{
            items:1,
            nav:false
        },
        545:{
            items:2,
            nav:false
        },
       
        768:{
            items:2,
            nav:true
        },
        1023:{
            items:2,
            nav:true
        },
        
        
    },
    navText: ["<i class='icon-owl1 fas fa-long-arrow-alt-left'></i>", "<i class='icon-owl1 fas fa-long-arrow-alt-right'></i>"]
  });

  $('.product').owlCarousel({
    
    margin:10,
    nav:true,
    items: 4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        545:{
            items:2,
            nav:false
        },
        768:{
            items:2,
            nav:true
        },
        1024:{
            items:4,
            nav:true
        },
        
    },
    navText: ["<i class='icon-owl1 fas fa-long-arrow-alt-left'></i>", "<i class='icon-owl1 fas fa-long-arrow-alt-right'></i>"]
  });
  $('.collection').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            autoWidth:true,
            items:1,
            nav:false
            
        },
        545:{
            items:2,
            nav:false
        },
        768:{
            items:2,
            nav:true
        },
        980:{
            items:2,
            nav:true,
        },
        
    },
    navText: ["<i class='icon-owl1 fas fa-long-arrow-alt-left'></i>", "<i class='icon-owl1 fas fa-long-arrow-alt-right'></i>"]
    
  });
  $('.banner').owlCarousel({
    loop:true,
    
    nav:true,
    items: 1,
    responsiveClass:true,
    responsive:{
        0:{
            
            nav:false
        },
        767:{
            
            nav:false,
        },
        980:{
            
            nav:true,
        },
    },
    navText: ["<i class='icon-owl fas fa-long-arrow-alt-left'></i>", "<i class='icon-owl fas fa-long-arrow-alt-right'></i>"]
  });

  var carouselEl = $('.banner');
  $(".my-next-button").click(function() {
  carouselEl.trigger('next.owl.carousel');
   });

  $(".my-previous-button").click(function() {
      carouselEl.trigger('prev.owl.carousel');
  });

  
  $('.blog').owlCarousel({
    loop:true,
    
    nav:true,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:true
        },
        980:{
            items:3,
            nav:true
        },
    },
    
    navText: ["<i class='icon-owl1 fas fa-long-arrow-alt-left'></i>", "<i class='icon-owl1 fas fa-long-arrow-alt-right'></i>"]
  });


  
  $('.customer').owlCarousel({
    loop:true,
    
    nav:true,
    items: 1,
    responsiveClass:true,
    responsive:{
        0:{
            
            nav:false
        },
        767:{
            
            nav:false,
        },
        980:{
            
            nav:true,
        },
    },
    navText: ["<i class='owl-prev1 far fa-caret-square-left'></i>", "<i class='owl-next1 far fa-caret-square-right'></i>"]
})
/* modal */ 
$('#modal-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })


/** ui-slider */

