
// Удалить интерес при клике на него
removeInterestForClick();


/**
 * В поле ввода интерсов можно вводить только строчные буквы
 */
$('.profile__input-interest').bind('input', function() {
    $(this).val($(this).val().toLowerCase());
});


/**
 * Добавить интерес в список при клике по кнопке "Добавить интерес"
 */
$('.profile__add-interest').click(function() {
    // Содержимое текстового поля ввода интересов
    let textFromInput = $('.profile__input-interest').val();

    // Проверка введённого текста на валидность  
    // (от 2 до 20 символов)
    let validText = isValidInputName(textFromInput);

    // Если поле ввода не пустое
    if (!(textFromInput === '') && validText) {
        // Новый элемент списка интересов
        let newInteresBlock = '<li class="interests__item">' + textFromInput + '</li>';

        // Добавить элемент в начало списка
        $('.profile__interests').prepend(newInteresBlock);


        // Очистить текстовое поле ввода интересов
        $('.profile__input-interest').val('');
    };


    // Удалять интерес при клике на него
    removeInterestForClick();
});



/**
 * Удалить интерес из списка при клике на него
 */
function removeInterestForClick() {
    $('.interests__item').click(function() {
        $(this).remove();
    });
};