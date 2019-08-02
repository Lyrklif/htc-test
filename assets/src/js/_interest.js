// Удалить интерес при клике на него
$(document).ready(function() {
    removeInterestForClick();
});


// В поле ввода интерсов можно вводить только строчные буквы
$(document).ready(function() {
    $('.profile__input-interest').bind('input', function() {
        $(this).val($(this).val().toLowerCase());
    });
});


// Добавить интерес в список при клике по кнопке "Добавить интерес"
$(document).ready(function() {
    // Нажание на кнопку "Добавить интерес"
    $('.profile__add-interest').click(function() {
        // Получить содержимое текстового поля ввода интересов
        var textFromInput = $('.profile__input-interest').val();
        
        // Если поле ввода не пустое
        if(!(textFromInput === '')) {
            // Новый элемент списка интересов
            var newInteresBlock = '<li class="interests__item">' + textFromInput + '</li>';

            // Добавить элемент в начало списка
            $('.profile__interests').prepend(newInteresBlock);


            // Очистить текстовое поле ввода интересов
            $('.profile__input-interest').val('');
        }


        // Удалить интерес при клике на него
        removeInterestForClick();
    });
});


// Удалить интерес из списка при клике на него
function removeInterestForClick() {
    $('.interests__item').click(function() {
        $(this).remove();
    });
};