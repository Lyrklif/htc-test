
// Удалить интерес при клике на него
    removeInterestForClick();


// В поле ввода интерсов можно вводить только строчные буквы
    $('.profile__input-interest').bind('input', function() {
        $(this).val($(this).val().toLowerCase());
    });


// $('#FORM-ADD-INTERESTS').submit(function (e) {
//     e.preventDefault();
//     $.ajax({
//         // url: "send_interests.php",
//         // type: "POST",
//         // data: $('#FORM-ADD-INTERESTS').serialize()
//     });
// });


// Добавить интерес в список при клике по кнопке "Добавить интерес"
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



// Удалить интерес из списка при клике на него
function removeInterestForClick() {
    $('.interests__item').click(function() {
        $(this).remove();
    });
};