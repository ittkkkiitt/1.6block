    // Модальное окно со звонком

    const modalCallOpenBtns = document.querySelectorAll('.btn--call');
    const modalCall = document.querySelector('.modal-call');
    const modalCallCloseBtn = document.querySelector('.modal-form__close--call');
    const menu = document.querySelector('.aside');
    const overlay = document.querySelector('.overlay');

    const openCallModal = function () {

        modalCall.classList.add('modal-call--active');
        overlay.classList.add('overlay--active');

        if (menu.classList.contains('aside--active')) {
            menu.classList.remove('aside--active');
        }

    };


    const closeCallModal = function () {
        modalCall.classList.remove('modal-call--active');
        overlay.classList.remove('overlay--active');
    };

    modalCallOpenBtns.forEach(btn => {
        btn.addEventListener('click', openCallModal);
    });

    modalCallCloseBtn.addEventListener('click', closeCallModal);
    overlay.addEventListener('click', closeCallModal);

   // Модальное окно с обратной связью

    const modalFeedbackOpenBtns = document.querySelectorAll('.btn--chat');
    const modalFeedback = document.querySelector('.modal-feedback');
    const modalFeedbackCloseBtn = document.querySelector('.modal-form__close--feedback');

    const openFeedbackModal = function () {

        modalFeedback.classList.add('modal-feedback--active');
        overlay.classList.add('overlay--active');

        if (menu.classList.contains('aside--active')) {
            menu.classList.remove('aside--active');
      }

    };

    const closeFeedbackModal = function () {
        modalFeedback.classList.remove('modal-feedback--active');
        overlay.classList.remove('overlay--active');
    };

    modalFeedbackOpenBtns.forEach(btn => {
        btn.addEventListener('click', openFeedbackModal);
    });

    modalFeedbackCloseBtn.addEventListener('click', closeFeedbackModal);
    overlay.addEventListener('click', closeFeedbackModal);

// Главное меню с навигацией

    const asideOpenBtn = document.querySelector('.btn--menu');
    const aside = document.querySelector('.aside');
    const asideBtnClose = aside.querySelector('.aside__btn--close');

    const openAsideMenu = function () {

        aside.classList.add('aside--active');
        overlay.classList.add('overlay--active');

        if (modalFeedback.classList.contains('modal-feedback--active')) {
            modalFeedback.classList.remove('modal-feedback--active');
        }

        if (modalCall.classList.contains('modal-call--active')) {
            modalCall.classList.remove('modal-call--active');
        }
    };

    const closeAsideMenu = function () {
        aside.classList.remove('aside--active');
        overlay.classList.remove('overlay--active');
    };

    asideOpenBtn.addEventListener('click', openAsideMenu);

    asideBtnClose.addEventListener('click', closeAsideMenu);

    overlay.addEventListener('click', closeAsideMenu);


