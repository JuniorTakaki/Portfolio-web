document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2000, // Delay between slides in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerVIew:1
            },
            620:{
                slidesPerVIew:2
            },
            1024:{
                slidesPerVIew:3
            }
        }
    });
});
