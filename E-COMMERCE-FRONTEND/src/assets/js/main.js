 jQuery(document).ready(function () {
    'use strict';

    owlCarousels();
    quantityInputs();

    // Header Search Toggle

    var  jQuerysearchWrapper =  jQuery('.header-search-wrapper'),
    	 jQuerybody =  jQuery('body'),
         jQuerysearchToggle =  jQuery('.search-toggle');

	 jQuerysearchToggle.on('click', function (e) {
		 jQuerysearchWrapper.toggleClass('show');
		 jQuery(this).toggleClass('active');
		 jQuerysearchWrapper.find('input').focus();
		e.preventDefault();
	});

	 jQuerybody.on('click', function (e) {
		if (  jQuerysearchWrapper.hasClass('show') ) {
			 jQuerysearchWrapper.removeClass('show');
			 jQuerysearchToggle.removeClass('active');
			 jQuerybody.removeClass('is-search-active');
		}
	});

	 jQuery('.header-search').on('click', function (e) {
		e.stopPropagation();
	});

	// Sticky header 
    var catDropdown =  jQuery('.category-dropdown'),
        catInitVal = catDropdown.data('visible');
        
	if (  jQuery('.sticky-header').length &&  jQuery(window).width() >= 992 ) {
		var sticky = new Waypoint.Sticky({
			element:  jQuery('.sticky-header')[0],
			stuckClass: 'fixed',
			offset: -300,
            handler: function ( direction ) {
                // Show category dropdown
                if ( catInitVal &&  direction == 'up') {
                    catDropdown.addClass('show').find('.dropdown-menu').addClass('show');
                    catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'true');
                    return false;
                }

                // Hide category dropdown on fixed header
                if ( catDropdown.hasClass('show') ) {
                    catDropdown.removeClass('show').find('.dropdown-menu').removeClass('show');
                    catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'false');
                } 
            }
		});
	}

    // Menu init with superfish plugin
    if (  jQuery.fn.superfish ) {
         jQuery('.menu, .menu-vertical').superfish({
            popUpSelector: 'ul, .megamenu',
            hoverClass: 'show',
            delay: 0,
            speed: 80,
            speedOut: 80 ,
            autoArrows: true
        });
    }

	// Mobile Menu Toggle - Show & Hide
     jQuery('.mobile-menu-toggler').on('click', function (e) {
		 jQuerybody.toggleClass('mmenu-active');
		 jQuery(this).toggleClass('active');
		e.preventDefault();
    });

     jQuery('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
		 jQuerybody.removeClass('mmenu-active');
		 jQuery('.menu-toggler').removeClass('active');
		e.preventDefault();
    });

	// Add Mobile menu icon arrows to items with children
     jQuery('.mobile-menu').find('li').each(function () {
        var  jQuerythis =  jQuery(this);

        if (  jQuerythis.find('ul').length ) {
             jQuery('<span/>', {
                'class': 'mmenu-btn'
            }).appendTo( jQuerythis.children('a'));
        }
    });

    // Mobile Menu toggle children menu
     jQuery('.mmenu-btn').on('click', function (e) {
        var  jQueryparent =  jQuery(this).closest('li'),
             jQuerytargetUl =  jQueryparent.find('ul').eq(0);

            if ( ! jQueryparent.hasClass('open') ) {
                 jQuerytargetUl.slideDown(300, function () {
                     jQueryparent.addClass('open');
                });
            } else {
                 jQuerytargetUl.slideUp(300, function () {
                     jQueryparent.removeClass('open');
                });
            }

        e.stopPropagation();
        e.preventDefault();
    });

	// Sidebar Filter - Show & Hide
    var  jQuerysidebarToggler =  jQuery('.sidebar-toggler');
     jQuerysidebarToggler.on('click', function (e) {
		 jQuerybody.toggleClass('sidebar-filter-active');
		 jQuery(this).toggleClass('active');
		e.preventDefault();
    });

     jQuery('.sidebar-filter-overlay').on('click', function (e) {
		 jQuerybody.removeClass('sidebar-filter-active');
		 jQuerysidebarToggler.removeClass('active');
		e.preventDefault();
    });

    // Clear All checkbox/remove filters in sidebar filter
     jQuery('.sidebar-filter-clear').on('click', function (e) {
    	 jQuery('.sidebar-shop').find('input').prop('checked', false);

    	e.preventDefault();
    });

    // Popup - Iframe Video - Map etc.
    if (  jQuery.fn.magnificPopup ) {
         jQuery('.btn-iframe').magnificPopup({
            type: 'iframe',
            removalDelay: 600,
            preloader: false,
            fixedContentPos: false,
            closeBtnInside: false
        });
    }

    // Product hover
    if (  jQuery.fn.hoverIntent ) {
         jQuery('.product-3').hoverIntent(function () {
            var  jQuerythis =  jQuery(this),
                animDiff = (  jQuerythis.outerHeight() - (  jQuerythis.find('.product-body').outerHeight() +  jQuerythis.find('.product-media').outerHeight()) ),
                animDistance = (  jQuerythis.find('.product-footer').outerHeight() - animDiff );

             jQuerythis.find('.product-footer').css({ 'visibility': 'visible', 'transform': 'translateY(0)' });
             jQuerythis.find('.product-body').css('transform', 'translateY('+ -animDistance +'px)');

        }, function () {
            var  jQuerythis =  jQuery(this);

             jQuerythis.find('.product-footer').css({ 'visibility': 'hidden', 'transform': 'translateY(100%)' });
             jQuerythis.find('.product-body').css('transform', 'translateY(0)');
        });
    }

    // Slider For category pages / filter price
    if ( typeof noUiSlider === 'object' ) {
		var priceSlider  = document.getElementById('price-slider');

		// Check if #price-slider elem is exists if not return
		// to prevent error logs
		if (priceSlider == null) return;

		noUiSlider.create(priceSlider, {
			start: [ 0, 750 ],
			connect: true,
			step: 50,
			margin: 200,
			range: {
				'min': 0,
				'max': 1000
			},
			tooltips: true,
			format: wNumb({
		        decimals: 0,
		        prefix: ' jQuery'
		    })
		});

		// Update Price Range
		priceSlider.noUiSlider.on('update', function( values, handle ){
			 jQuery('#filter-price-range').text(values.join(' - '));
		});
	}

	// Product countdown
	if (  jQuery.fn.countdown ) {
		 jQuery('.product-countdown').each(function () {
			var  jQuerythis =  jQuery(this), 
				untilDate =  jQuerythis.data('until'),
				compact =  jQuerythis.data('compact'),
                dateFormat = ( ! jQuerythis.data('format') ) ? 'DHMS' :  jQuerythis.data('format'),
                newLabels = ( ! jQuerythis.data('labels-short') ) ? 
                                ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'] :
                                ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
                newLabels1 = ( ! jQuerythis.data('labels-short') ) ? 
                                ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'] :
                                ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'];

            var newDate;

            // Split and created again for ie and edge 
            if ( ! jQuerythis.data('relative') ) {
                var untilDateArr = untilDate.split(", "), // data-until 2019, 10, 8 - yy,mm,dd
                    newDate = new Date(untilDateArr[0], untilDateArr[1] - 1, untilDateArr[2]);
            } else {
                newDate = untilDate;
            }

			 jQuerythis.countdown({
			    until: newDate,
			    format: dateFormat,
			    padZeroes: true,
			    compact: compact,
			    compactLabels: ['y', 'm', 'w', ' days,'],
			    timeSeparator: ' : ',
                labels: newLabels,
                labels1: newLabels1

			});
		});

		// Pause
		//  jQuery('.product-countdown').countdown('pause');
	}

	// Quantity Input - Cart page - Product Details pages
    function quantityInputs() {
        if (  jQuery.fn.inputSpinner ) {
             jQuery("input[type='number']").inputSpinner({
                decrementButton: '<i class="icon-minus"></i>',
                incrementButton: '<i class="icon-plus"></i>',
                groupClass: 'input-spinner',
                buttonsClass: 'btn-spinner',
                buttonsWidth: '26px'
            });
        }
    }

    // Sticky Content - Sidebar - Social Icons etc..
    // Wrap elements with <div class="sticky-content"></div> if you want to make it sticky
    if (  jQuery.fn.stick_in_parent &&  jQuery(window).width() >= 992 ) {
    	 jQuery('.sticky-content').stick_in_parent({
			offset_top: 80,
            inner_scrolling: false
		});
    }

    function owlCarousels( jQuerywrap, options) {
        if (  jQuery.fn.owlCarousel ) {
            var owlSettings = {
                items: 1,
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: true,
                navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                dots: true,
                smartSpeed: 400,
                autoplay: false,
                autoplayTimeout: 15000
            };
            if (typeof  jQuerywrap == 'undefined') {
                 jQuerywrap =  jQuery('body');
            }
            if (options) {
                owlSettings =  jQuery.extend({}, owlSettings, options);
            }

            // Init all carousel
             jQuerywrap.find('[data-toggle="owl"]').each(function () {
                var  jQuerythis =  jQuery(this),
                    newOwlSettings =  jQuery.extend({}, owlSettings,  jQuerythis.data('owl-options'));

                 jQuerythis.owlCarousel(newOwlSettings);
                
            });   
        }
    }

    // Product Image Zoom plugin - product pages
    if (  jQuery.fn.elevateZoom ) {
         jQuery('#product-zoom').elevateZoom({
            gallery:'product-zoom-gallery',
            galleryActiveClass: 'active',
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 400,
            zoomWindowFadeOut: 400,
            responsive: true
        });

        // On click change thumbs active item
         jQuery('.product-gallery-item').on('click', function (e) {
             jQuery('#product-zoom-gallery').find('a').removeClass('active');
             jQuery(this).addClass('active');

            e.preventDefault();
        });

        var ez =  jQuery('#product-zoom').data('elevateZoom');

        // Open popup - product images
         jQuery('#btn-product-gallery').on('click', function (e) {
            if (  jQuery.fn.magnificPopup ) {
                 jQuery.magnificPopup.open({
                    items: ez.getGalleryList(),
                    type: 'image',
                    gallery:{
                        enabled:true
                    },
                    fixedContentPos: false,
                    removalDelay: 600,
                    closeBtnInside: false
                }, 0);

                e.preventDefault();
            }
        });
    }

    // Product Gallery - product-gallery.html 
    if (  jQuery.fn.owlCarousel &&  jQuery.fn.elevateZoom ) {
        var owlProductGallery =  jQuery('.product-gallery-carousel');

        owlProductGallery.on('initialized.owl.carousel', function () {
            owlProductGallery.find('.active img').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 400,
                zoomWindowFadeOut: 400,
                responsive: true
            });
        });

        owlProductGallery.owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
            dots: false,
            smartSpeed: 400,
            autoplay: false,
            autoplayTimeout: 15000,
            responsive: {
                0: {
                    items: 1
                },
                560: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });

        owlProductGallery.on('change.owl.carousel', function () {
             jQuery('.zoomContainer').remove();
        });

        owlProductGallery.on('translated.owl.carousel', function () {
            owlProductGallery.find('.active img').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 400,
                zoomWindowFadeOut: 400,
                responsive: true
            });
        });
    }

     // Product Gallery Separeted- product-sticky.html 
    if (  jQuery.fn.elevateZoom ) {
         jQuery('.product-separated-item').find('img').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 400,
            zoomWindowFadeOut: 400,
            responsive: true
        });

        // Create Array for gallery popup
        var galleryArr = [];
         jQuery('.product-gallery-separated').find('img').each(function () {
            var  jQuerythis =  jQuery(this),
                imgSrc =  jQuerythis.attr('src'),
                imgTitle=  jQuerythis.attr('alt'),
                obj = {'src': imgSrc, 'title': imgTitle };

            galleryArr.push(obj);
        })

         jQuery('#btn-separated-gallery').on('click', function (e) {
            if (  jQuery.fn.magnificPopup ) {
                 jQuery.magnificPopup.open({
                    items: galleryArr,
                    type: 'image',
                    gallery:{
                        enabled:true
                    },
                    fixedContentPos: false,
                    removalDelay: 600,
                    closeBtnInside: false
                }, 0);

                e.preventDefault();
            }
        });
    }

    // Checkout discount input - toggle label if input is empty etc...
     jQuery('#checkout-discount-input').on('focus', function () {
        // Hide label on focus
         jQuery(this).parent('form').find('label').css('opacity', 0);
    }).on('blur', function () {
        // Check if input is empty / toggle label
        var  jQuerythis =  jQuery(this);

        if(  jQuerythis.val().length !== 0 ) {
             jQuerythis.parent('form').find('label').css('opacity', 0);
        } else {
             jQuerythis.parent('form').find('label').css('opacity', 1);
        }
    });

    // Dashboard Page Tab Trigger
     jQuery('.tab-trigger-link').on('click', function (e) {
    	var targetHref =  jQuery(this).attr('href');

    	 jQuery('.nav-dashboard').find('a[href="'+targetHref+'"]').trigger('click');

    	e.preventDefault();
    });

    // Masonry / Grid layout fnction
	function layoutInit( container, selector) {
		 jQuery(container).each(function () {
            var  jQuerythis =  jQuery(this);

             jQuerythis.isotope({
                itemSelector: selector,
                layoutMode: (  jQuerythis.data('layout') ?  jQuerythis.data('layout'): 'masonry' )
            });
        });
	}
 
	function isotopeFilter ( filterNav, container) {
		 jQuery(filterNav).find('a').on('click', function(e) {
			var  jQuerythis =  jQuery(this),
				filter =  jQuerythis.attr('data-filter');

			// Remove active class
			 jQuery(filterNav).find('.active').removeClass('active');

			// Init filter
			 jQuery(container).isotope({
				filter: filter,
				transitionDuration: '0.7s'
			});
			
			// Add active class
			 jQuerythis.closest('li').addClass('active');
			e.preventDefault();
		});
	}

    /* Masonry / Grid Layout & Isotope Filter for blog/portfolio etc... */
    if ( typeof imagesLoaded === 'function' &&  jQuery.fn.isotope) {
        // Portfolio
         jQuery('.portfolio-container').imagesLoaded(function () {
            // Portfolio Grid/Masonry
            layoutInit( '.portfolio-container', '.portfolio-item' ); // container - selector
            // Portfolio Filter
            isotopeFilter( '.portfolio-filter',  '.portfolio-container'); //filterNav - .container
        });

        // Blog
         jQuery('.entry-container').imagesLoaded(function () {
            // Blog Grid/Masonry
            layoutInit( '.entry-container', '.entry-item' ); // container - selector
            // Blog Filter
            isotopeFilter( '.entry-filter',  '.entry-container'); //filterNav - .container
        });

        // Product masonry product-masonry.html
         jQuery('.product-gallery-masonry').imagesLoaded(function () {
            // Products Grid/Masonry
            layoutInit( '.product-gallery-masonry', '.product-gallery-item' ); // container - selector
        });

        // Products - Demo 11
         jQuery('.products-container').imagesLoaded(function () {
            // Products Grid/Masonry
            layoutInit( '.products-container', '.product-item' ); // container - selector
            // Product Filter
            isotopeFilter( '.product-filter',  '.products-container'); //filterNav - .container
        });
    }

	// Count
    var  jQuerycountItem =  jQuery('.count');
	if (  jQuery.fn.countTo ) {
        if ( jQuery.fn.waypoint) {
             jQuerycountItem.waypoint( function () {
                 jQuery(this.element).countTo();
            }, {
                offset: '90%',
                triggerOnce: true 
            });
        } else {
             jQuerycountItem.countTo();
        }    
    } else { 
        // fallback
        // Get the data-to value and add it to element
         jQuerycountItem.each(function () {
            var  jQuerythis =  jQuery(this),
                countValue =  jQuerythis.data('to');
             jQuerythis.text(countValue);
        });
    }

    // Scroll To button
    var  jQueryscrollTo =  jQuery('.scroll-to');
    // If button scroll elements exists
    if (  jQueryscrollTo.length ) {
        // Scroll to - Animate scroll
         jQueryscrollTo.on('click', function(e) {
            var target =  jQuery(this).attr('href'),
                 jQuerytarget =  jQuery(target);
            if ( jQuerytarget.length) {
                // Add offset for sticky menu
                var scrolloffset = (  jQuery(window).width() >= 992 ) ? ( jQuerytarget.offset().top - 52) :  jQuerytarget.offset().top
                 jQuery('html, body').animate({
                    'scrollTop': scrolloffset
                }, 600);
                e.preventDefault();
            }
        });
    }

    // Review tab/collapse show + scroll to tab
     jQuery('#review-link').on('click', function (e) {
        var target =  jQuery(this).attr('href'),
             jQuerytarget =  jQuery(target);

        if (  jQuery('#product-accordion-review').length ) {
             jQuery('#product-accordion-review').collapse('show');
        }

        if ( jQuerytarget.length) {
            // Add offset for sticky menu
            var scrolloffset = (  jQuery(window).width() >= 992 ) ? ( jQuerytarget.offset().top - 72) : (  jQuerytarget.offset().top - 10 )
             jQuery('html, body').animate({
                'scrollTop': scrolloffset
            }, 600);

             jQuerytarget.tab('show');
        }

    	e.preventDefault();
    });

	// Scroll Top Button - Show
    var  jQueryscrollTop =  jQuery('#scroll-top');

     jQuery(window).on('load scroll', function() {
        if (  jQuery(window).scrollTop() >= 400 ) {
             jQueryscrollTop.addClass('show');
        } else {
             jQueryscrollTop.removeClass('show');
        }
    });

    // On click animate to top
     jQueryscrollTop.on('click', function (e) {
         jQuery('html, body').animate({
            'scrollTop': 0
        }, 800);
        e.preventDefault();
    });

    // Google Map api v3 - Map for contact pages
    if ( document.getElementById("map") && typeof google === "object" ) {

        var content =   '<address>' +
                            '88 Pine St,<br>' +
                            'New York, NY 10005, USA<br>'+
                            '<a href="#" class="direction-link" target="_blank">Get Directions <i class="icon-angle-right"></i></a>'+
                        '</address>';

        var latLong = new google.maps.LatLng(40.8127911,-73.9624553);

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: latLong, // Map Center coordinates
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 360
        });

        var marker;
        marker = new google.maps.Marker({
            position: latLong,
            map: map,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function() {
              infowindow.open(map, marker);
            }
        })(marker));
    }

    var  jQueryviewAll =  jQuery('.view-all-demos');
     jQueryviewAll.on('click', function (e) {
        e.preventDefault();
         jQuery('.demo-item.hidden').addClass('show');
         jQuery(this).addClass('disabled-hidden');
    })

    var  jQuerymegamenu =  jQuery('.megamenu-container .sf-with-ul');
     jQuerymegamenu.hover(function() {
         jQuery('.demo-item.show').addClass('hidden');
         jQuery('.demo-item.show').removeClass('show');
         jQueryviewAll.removeClass('disabled-hidden');
    });

    // Product quickView popup
     jQuery('.btn-quickview').on('click', function (e) {
        var ajaxUrl =  jQuery(this).attr('href');
        if (  jQuery.fn.magnificPopup ) {
            setTimeout(function () {
                 jQuery.magnificPopup.open({
                    type: 'ajax',
                    mainClass: "mfp-ajax-product",
                    tLoading: '',
                    preloader: false,
                    removalDelay: 350,
                    items: {
                      src: ajaxUrl
                    },
                    callbacks: {
                        ajaxContentAdded: function () {
                            owlCarousels( jQuery('.quickView-content'), {
                                onTranslate: function(e) {
                                    var  jQuerythis =  jQuery(e.target),
                                        currentIndex = ( jQuerythis.data('owl.carousel').current() + e.item.count - Math.ceil(e.item.count / 2)) % e.item.count;
                                     jQuery('.quickView-content .carousel-dot').eq(currentIndex).addClass('active').siblings().removeClass('active');
                                }
                            });
                            quantityInputs();
                        },
                        open: function() {
                             jQuery('body').css('overflow-x', 'visible');
                             jQuery('.sticky-header.fixed').css('padding-right', '1.7rem');
                        },
                        close: function() {
                             jQuery('body').css('overflow-x', 'hidden');
                             jQuery('.sticky-header.fixed').css('padding-right', '0');
                        }
                    },

                    ajax: {
                        tError: '',
                    }
                }, 0);
            }, 500);

            e.preventDefault();
        }
    });
     jQuery('body').on('click', '.carousel-dot', function () {
         jQuery(this).siblings().removeClass('active');
         jQuery(this).addClass('active');
    });

     jQuery('body').on('click', '.btn-fullscreen', function(e) {
        var galleryArr = [];
         jQuery(this).parents('.owl-stage-outer').find('.owl-item:not(.cloned)').each(function() {
            var  jQuerythis =  jQuery(this).find('img'),
                imgSrc =  jQuerythis.attr('src'),
                imgTitle=  jQuerythis.attr('alt'),
                obj = {'src': imgSrc, 'title': imgTitle };
            galleryArr.push(obj);
        });

        var ajaxUrl =  jQuery(this).attr('href');

        var mpInstance =  jQuery.magnificPopup.instance;
        if (mpInstance.isOpen)
            mpInstance.close();

        setTimeout(function () {
             jQuery.magnificPopup.open({
                type: 'ajax',
                mainClass: "mfp-ajax-product",
                tLoading: '',
                preloader: false,
                removalDelay: 350,
                items: {
                  src: ajaxUrl
                },
                callbacks: {
                    ajaxContentAdded: function () {
                        owlCarousels( jQuery('.quickView-content'), {
                            onTranslate: function(e) {
                                var  jQuerythis =  jQuery(e.target),
                                    currentIndex = ( jQuerythis.data('owl.carousel').current() + e.item.count - Math.ceil(e.item.count / 2)) % e.item.count;
                                 jQuery('.quickView-content .carousel-dot').eq(currentIndex).addClass('active').siblings().removeClass('active');
                                 jQuery('.curidx').html(currentIndex + 1);
                            }
                        });
                        quantityInputs();
                    },
                    open: function() {
                         jQuery('body').css('overflow-x', 'visible');
                         jQuery('.sticky-header.fixed').css('padding-right', '1.7rem');
                    },
                    close: function() {
                         jQuery('body').css('overflow-x', 'hidden');
                         jQuery('.sticky-header.fixed').css('padding-right', '0');
                    }
                },

                ajax: {
                    tError: '',
                }
            }, 0);
        }, 500);
        
        e.preventDefault();
    });

    if(document.getElementById('newsletter-popup-form')) {
        setTimeout(function() {
            var mpInstance =  jQuery.magnificPopup.instance;
            if (mpInstance.isOpen) {
                mpInstance.close();
            }

            setTimeout(function() {
                 jQuery.magnificPopup.open({
                    items: {
                        src: '#newsletter-popup-form'
                    },
                    type: 'inline',
                    removalDelay: 350,
                    callbacks: {
                        open: function() {
                             jQuery('body').css('overflow-x', 'visible');
                             jQuery('.sticky-header.fixed').css('padding-right', '1.7rem');
                        },
                        close: function() {
                             jQuery('body').css('overflow-x', 'hidden');
                             jQuery('.sticky-header.fixed').css('padding-right', '0');
                        }
                    }
                });
            }, 500)
        }, 10000)
    }
});
