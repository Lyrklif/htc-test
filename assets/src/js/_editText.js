// При клике на редактируемый текст (информация о пользователе)
// появляется input, в котором можно изменить данные.
// После этого новый текст изменяется и на странице
$(document).ready(function() {
    $('.editText').on('click', function(event) {

        // Редактируемый элемент, по которому кликнули
        var editTextClick = $(this);

        // Записать в переменную старый текст элемента
        var oldText = editTextClick.html();

        // Создание input для ввода новой информации
        var editInput =
            '<input class="newText" type="text" name="editableText" value="' + oldText + '">';

        // Добавить input после текста
        editTextClick.after(editInput);

        // Найти созданный input
        var newText = editTextClick.next('.newText');

        // Фокус на созданном input 
        newText.focus();

        // При нажатии на Enter, когда input в фокусе
        newText.keydown(function(event) {
            if (event.which == 13) {
                closeInput();
            }
        });

        // Когда элемент теряет фокус
        newText.blur(function() {
            closeInput();
        });

        // Отобразить новый текст на тсранице и закрыть input
        function closeInput() {
            // Новый текст, который пользователь ввел/изменил в input 
            let newTextVal = newText.val();

            // Записать новый текст в тег
            editTextClick.text(newTextVal);

            localStorage.setItem('profileName', newTextVal);

            // удалить input
            newText.remove();
        };
    });
});

