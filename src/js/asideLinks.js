// изменение активной кнопки при выборе выборе ссылки в меню

    const asideLinksContainer  = document.querySelector('.aside__nav');
    let selectedNavLink = document.querySelector('.aside__nav-link--active');

    asideLinksContainer.addEventListener('click', function(event) {
        let target = event.target;
        if (target.closest('.aside__nav-link')) {
            if (selectedNavLink) {
                selectedNavLink.classList.remove('aside__nav-link--active');
            }
            selectedNavLink = target;
            selectedNavLink.classList.add('aside__nav-link--active');
        }
    })

