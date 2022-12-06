// изменение активной кнопки при выборе выбора языка

    const langContainer  = document.querySelector('.aside__lang-options');
    let selectedLangBtn = document.querySelector('.lang__btn--active');

    langContainer.addEventListener('click', function(event) {
        let target = event.target;
        if (target.closest('.lang__btn')) {
            if (selectedLangBtn) {
                selectedLangBtn.classList.remove('lang__btn--active');
            }
            selectedLangBtn = target;
            selectedLangBtn.classList.add('lang__btn--active');
        }
    })


