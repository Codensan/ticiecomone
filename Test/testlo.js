// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items: 3,
//         itemsDesktop: [1199, 3],
//         itemsDesktopSmall: [980, 2],
//         itemsMobile: [600, 1],
//         navigation: true,
//         navigationText: ["", ""],
//         pagination: true,
//         autoPlay: true
//     });
// });



$('.owl-carousel').owlCarousel({
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
})

// const slides = document.querySelectorAll('.ProductCard');
// const auto = true;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//     const activeSlide = document.querySelector('.Active');
//     activeSlide.classList.remove('.Active');
//     if (activeSlide.nextElementSibling) {
//         activeSlide.nextElementSibling.classList.add('Active');
//     } else {
//         slides[0].classList.add('Active')
//     }
// }


// if (auto) {
//     slideInterval = setInterval(nextSlide, intervalTime);
// }