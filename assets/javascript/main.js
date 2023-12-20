// Vanilla JS
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("navbar").style.background = "#fff";
    } else {

        document.getElementById("navbar").style.background = "none";
    }
}

function burgerClick() {
    document.getElementById("navbar").style.background = "#fff";
}

//Swiper JS 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '#swiper-next',
        prevEl: '#swiper-prev',
    },
});
//Swiper JS section 4
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '#swiper-next2',
        prevEl: '#swiper-prev2',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});