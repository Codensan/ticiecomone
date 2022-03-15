// Owl Carousel Slider

$('#main-slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        }
    }
});


$("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: false,
    navigationText: ["", ""],
    pagination: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
});


$('.owl-carousel').owlCarousel({
    items: 6,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: false,
    navigationText: ["", ""],
    pagination: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
})





// // OWl Carousel First Product Component
// const carouselSlideProduct = document.querySelector('cdns-md-product-carousel');
// const carouselItem = document.querySelectorAll('.cdns-md-product-item');

// //Button
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Counter
// let counter = 1;
// const size = carouselItem[0].clientWidth;

// carouselSlideProduct.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //Button Listeners

// nextBtn.addEventListener('click', () => {
//     carouselSlideProduct.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     console.log(counter);
// })