
// Переключение вкладок
    $('.nav-tabs__item').on('click', '.nav-tabs__link:not(.active)', function(event) {
        event.preventDefault();
        $('.nav-tabs__link').removeClass('active');
        $(this).addClass('active');
        $('.profile-block__section').hide();
        $(this.hash).show();
    });
