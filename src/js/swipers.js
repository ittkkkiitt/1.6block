function mediaInitSliderBrands() {
    let swiper;
    const windowWidth = window.innerWidth;
    const swiperContainer = document.querySelector('.swiper-brands');
    if (mediaSwiperList.matches) {
        swiperContainer.style.display = 'none';
        if (swiper) {
            swiper.destroy(true, true);
        }
    } else {
        swiperContainer.removeAttribute('style');
        if (!swiper) {
            swiper = new Swiper('.swiper-brands', {
                slidesPerView: windowWidth/(240+32),
                pagination: {
                    el: '.swiper-pagination-brands',
                    clickable: true,
                },
                loop: true
            });
        }
    }
}


function mediaInitSliderDevices() {
    let swiper;
    const windowWidth = window.innerWidth;
    const swiperContainer = document.querySelector('.swiper-devices');
    if (mediaSwiperList.matches) {
        swiperContainer.style.display = 'none';
        if (swiper) {
            swiper.destroy(true, true);
        }
    } else {
        swiperContainer.removeAttribute('style');
        if (!swiper) {
            swiper = new Swiper('.swiper-devices', {
                slidesPerView: windowWidth/(224+64),
                pagination: {
                    el: '.swiper-pagination-devices',
                    clickable: true,
                },
                loop: true
            });
        }
    }
}



function mediaInitSliderPrices() {
    let swiper;
    const windowWidth = window.innerWidth;
    const swiperContainer = document.querySelector('.swiper-prices');
    if (mediaSwiperList.matches) {
        swiperContainer.style.display = 'none';
        if (swiper) {
            swiper.destroy(true, true);
        }
    } else {
        swiperContainer.removeAttribute('style');
        if (!swiper) {
            swiper = new Swiper('.swiper-prices', {
                slidesPerView: windowWidth/(260+32),
                pagination: {
                    el: '.swiper-pagination-prices',
                    clickable: true,
                },
                loop: true
            });
        }
    }
}

let mediaSwiper = '(min-width: 768px)';
let mediaSwiperList = window.matchMedia(mediaSwiper);

document.addEventListener("DOMContentLoaded", mediaInitSliderBrands);
mediaSwiperList.addEventListener('change', mediaInitSliderBrands);

document.addEventListener("DOMContentLoaded", mediaInitSliderPrices);
mediaSwiperList.addEventListener('change', mediaInitSliderPrices);

document.addEventListener("DOMContentLoaded", mediaInitSliderDevices);
mediaSwiperList.addEventListener('change', mediaInitSliderDevices);
