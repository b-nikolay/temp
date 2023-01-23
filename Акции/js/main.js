$(document).ready(function(e){

    

    // Team Tab
    $('.team_tab .tab_navigation .nav_item').on('click',function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.team_tab .tab_navigation .nav_item').removeClass('active');
        $(this).addClass('active');

        $('.team_tab .tab_item').slideUp(300);
        $(target).slideDown(300);
    })

    // Advantages Tab
    $('.advantages .tab_navigation .nav_item').on('click',function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.advantages .tab_navigation .nav_item').removeClass('active');
        $(this).addClass('active');

        $('.advantages .tab_item').slideUp(300);
        $(target).slideDown(300);
    })

    // Slider Portfolio
    const porfolioSlider = new Swiper('.portfolio_slider .swiper', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            0:{
                slidesPerView: 1.4,
            },
            768:{
                slidesPerView: 2.4,
            },
            1200:{
                slidesPerView: 4,
            },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper_next',
          prevEl: '.swiper_prev',
        },
    });

    // Last Seen Products
    const lastSeen = new Swiper('.last_seen_slider .swiper', {
        // Optional parameters
        slidesPerView: 5,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 3,
            },
            1200:{
                slidesPerView: 4,
            },
            1400:{
                slidesPerView: 5,
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.last_seen_navigation .swiper_next',
          prevEl: '.last_seen_navigation .swiper_prev',
        },
    });

    // Review Slider
    let reviewSliders = $('.review_swiper');
    reviewSliders.each(function(index,value){
        
        var $this = $(this);
        console.log($this.find('.slide_next')[0])
        // $(value).
        new Swiper(this, {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 20,
            navigation: {
                nextEl: $this.parent().find('.slide_next')[0],
                prevEl: $this.parent().find('.slide_prev')[0],
            },
    
            breakpoints:{
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 1.2,
                },
                1200: {
                    slidesPerView: 2
                }
    
            }
        });
    })


    // TeamGallery
    lightGallery(document.querySelector('.gallery_block'), {
        plugins: [lgZoom],
        speed: 500,
    });

    // TeamGallery
    lightGallery(document.querySelector('.portfolio_slider .swiper-wrapper'), {
        plugins: [lgZoom],
        speed: 500,
        selector: 'a'
    });

    // Certificates
    lightGallery(document.querySelector('#certificates .row'), {
        plugins: [lgZoom],
        speed: 500,
        selector: 'a'
    });

    $('.faq_item').on('click',function(e){
        e.preventDefault();
        
        $('.faq_item').not($(this)).find('.faq_body').slideUp();
        $(this).find('.faq_body').slideToggle(300);
        
        $('.faq_item').not($(this)).removeClass('active')
        $(this).toggleClass('active');

        if($(this).find('.faq_body').css('display') == 'none'){
            $(this).removeClass('active');
        }
    })

    $('.product_categories .parent_category').on('click',function(e){
        e.preventDefault();
        var childCategories = $(this).parent().find('.child_categories');
        $(this).toggleClass('active');
        $('.product_categories .child_categories').not(childCategories).slideUp();
        childCategories.slideToggle();
    })

    // Price Range Slider
    let price_range = $(".price_range");

    if(price_range.length > 0){
        $(".price_range").ionRangeSlider({
            skin: "round",
            type: "double",
            min: 500,
            max: 5000,
            from: 1500,
            to: 2700,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function(data) {
                $('.price_status .from .value').text(data.from);
                $('.price_status .to .value').text(data.to);
            }
        });
    }
    

    // Product Filter Widget Toggler
    $('.widget_item.boxed .widget_title').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active')
        $(this).parent().find('.widget_body').slideToggle({});
    })

    var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
    // Footer

    // WHEN MOBILE
    if(windowWidth <= 2000){
        $('.footer_item .footer_title').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('show')
            $(this).parent().find('ul').slideToggle();
        })
    }


    // MOBILE MENU AND SUBMENU ALSO SEARCH
    let menuToggler = $('.menu_toggler');
    let subCategory = $('.mobile_header .product_categories a');
    let searchToggler = $('.search_opener');

    if(searchToggler.length > 0){
        searchToggler.on('click',function(e){
            e.preventDefault();
            $('.mobile_search').toggleClass('show')
        })
    }


    
    if(menuToggler.length > 0){
        menuToggler.on('click',function(e){
            e.preventDefault();
            $('.mobile_menu').toggleClass('show');

            $('.mobile_search').removeClass('show')
            



            if($('.sub_category_1').hasClass('show')){
                $('.sub_category_1').removeClass('show');
            }

            if($('.mobile_menu').hasClass('show') || $('.sub_category_1').hasClass('show')){
                $('body').addClass('mobile_menu_open');
                $(this).addClass('opened')
            }else{
                $('body').removeClass('mobile_menu_open');
                $(this).removeClass('opened')
            }




            if($('.sub_category_2').hasClass('show')){
                $('.sub_category_2').removeClass('show');
            }

            if($('.mobile_menu').hasClass('show') || $('.sub_category_2').hasClass('show')){
                $('body').addClass('mobile_menu_open');
                $(this).addClass('opened')
            }else{
                $('body').removeClass('mobile_menu_open');
                $(this).removeClass('opened')
            }
        })

    }

    subCategory[0].addEventListener('click', (e) => {
        e.preventDefault();
            
        console.log(subCategory[1].text);
        $('.mobile_menu').removeClass('show');
        $('.mobile_search').removeClass('show');
        $('.sub_category_1').addClass('show')
    })
    subCategory[1].addEventListener('click', (e) => {
        e.preventDefault();
            
        console.log(subCategory[1].text);
        $('.mobile_menu').removeClass('show');
        $('.mobile_search').removeClass('show');
        $('.sub_category_2').addClass('show')
    })

    // if(menuToggler.length > 0){
    //     menuToggler.on('click',function(e){
    //         e.preventDefault();
    //         $('.mobile_menu').toggleClass('show');

    //         $('.mobile_search').removeClass('show')
            
    //         if($('.sub_category').hasClass('show')){
    //             $('.sub_category').removeClass('show');
    //         }

    //         if($('.mobile_menu').hasClass('show') || $('.sub_category').hasClass('show')){
    //             $('body').addClass('mobile_menu_open');
    //             $(this).addClass('opened')
    //         }else{
    //             $('body').removeClass('mobile_menu_open');
    //             $(this).removeClass('opened')
    //         }
    //     })
    // }

    // if(subCategory.length > 0){
    //     subCategory.on('click',function(e){
    //         e.preventDefault();
    //         $('.mobile_menu').removeClass('show');
    //         $('.mobile_search').removeClass('show');
    //         $('.sub_category').addClass('show')
    //     })
    // }

    MicroModal.init({
        disableScroll: true,
    });

    $('.calendar_view').datepicker({
        language: "ru"
    });

    $('.callback_btn').on('click',function(e){
        e.preventDefault();
        MicroModal.show('callBack');
    })

    $('.call_to_measure').on('click',function(e){
        e.preventDefault();
        MicroModal.show('call_measurement');
    })
    
})