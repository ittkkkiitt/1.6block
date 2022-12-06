/// Читать далее

   const textShowMoreBtn = document.querySelector('.about__btn-more');
    const textContainer = document.querySelector('.about__description-container');
    const aboutIcon = document.querySelector('.about__more-icon');
    const aboutCaption = document.querySelector('.about__btn-caption');

    const showMoreAboutHandler = () => {
      textContainer.classList.toggle('about__description-container--full');
      aboutIcon.classList.toggle('about__btn-icon--hide');

      if (textContainer.classList.contains('about__description-container--full')) {
        aboutCaption.textContent = 'Скрыть';
      } else {
        aboutCaption.textContent = 'Читать далее';
      }
  };

    textShowMoreBtn.addEventListener('click', showMoreAboutHandler);

//// Показать все бренды

    const brandsContainer = document.querySelector('.brands__nav--advanced');
    const brandsBtnMore = document.querySelector('.brands__btn-more');
    const brandsBtnText = document.querySelector('.brands__btn-caption');
    const brandsBtnIco = document.querySelector('.brands__more-icon');

    const showMoreBrandsHandler = () => {

    brandsBtnIco.classList.toggle('btn-more__icon--active');
    brandsContainer.classList.toggle("brands__nav--advanced--open");

    if (brandsContainer.classList.contains("brands__nav--advanced--open")) {
        brandsBtnText.textContent = 'Скрыть'
        for (const child of brandsContainer.children) {
            child.removeAttribute('style');
        }
    } else {
        brandsBtnText.textContent = 'Показать все'
        mediaHideItems(6,8,brandsContainer);
    }
    };

    brandsBtnMore.addEventListener('click', showMoreBrandsHandler);

    const devicesContainer = document.querySelector('.devices__nav--advanced');
    const devicesBtnMore = document.querySelector('.devices__btn-more');
    const devicesBtnText = document.querySelector('.devices__btn-caption');
    const devicesBtnIco = document.querySelector('.devices__btn-icon');


/// Показать все ремонтируемые девайсы

    const showMoreDevicesHandler = () => {

    devicesBtnIco.classList.toggle('devices__btn-icon--active');
    devicesContainer.classList.toggle("devices__nav--advanced--open");

    if (devicesContainer.classList.contains("devices__nav--advanced--open")) {
        devicesBtnText.textContent = 'Скрыть'
        for (const child of devicesContainer.children) {
            child.removeAttribute('style');
        }
    } else {
        devicesBtnText.textContent = 'Показать все'
        mediaHideItems(3,4,devicesContainer);
    }
    };
    devicesBtnMore.addEventListener('click', showMoreDevicesHandler);


/// скрытие невидимых блоков

function mediaHideItems(visibleSlidesTablet, visibleSlidesDesktop, container){

    if (mediaQueryIsDesktop.matches) {
        let count = 0;
        for (const child of container.children) {
            count++;
            child.removeAttribute('style');
            if (count > visibleSlidesDesktop) {
                child.style.display = 'none';
            }
          }
    }

    if (mediaQueryIsTablet.matches) {
        let count = 0;
        for (const child of container.children) {
            count++;
            child.removeAttribute('style');
            if (count > visibleSlidesTablet) {
                child.style.display = 'none';
            }
          }
    }
};


const mediaQueryTablet = '(min-width: 768px) and (max-width: 1439px)';
const mediaQueryDesktop = '(min-width: 1440px)';


const mediaQueryIsTablet = window.matchMedia(mediaQueryTablet);
const mediaQueryIsDesktop = window.matchMedia(mediaQueryDesktop);

/// скрытие элементов при загрузке страницы и при изменении размера экрана

document.addEventListener("DOMContentLoaded", mediaHideItems(6,8,brandsContainer));
mediaQueryIsDesktop.addEventListener('change', event => mediaHideItems(6,8,brandsContainer));
mediaQueryIsTablet.addEventListener('change', event => mediaHideItems(6,8,brandsContainer));

document.addEventListener("DOMContentLoaded", mediaHideItems(3,4,devicesContainer));
mediaQueryIsDesktop.addEventListener('change', event => mediaHideItems(3,4,devicesContainer));
mediaQueryIsTablet.addEventListener('change', event => mediaHideItems(3,4,devicesContainer));
