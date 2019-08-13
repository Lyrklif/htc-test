/**
 * При нажатии на ИМЯ / ТЕЛЕФОН / EMAIL пользователя появляется input,
 * в котором можно изменить эти данные.
 * После внесения изменений данные проверяются на валидность
 * и отображаются вместо старых, также записываются в localStorage
 *
 * ================================================================
 * Функции: 
 * procedureCloseInput - Порядок действий при попытке закрыть input (нажатие Enter, потеря фокуса)
 * isChangedText - Отличается ли введённый в input текст от старого?
 * writeNewText - Записать новый текст в тег
 * 
 * isValidInputName - Проверка нового имени на валидность
 * isValidInputTel - Проверка нового телефона на валидность
 * isValidInputEmail - Проверка нового email на валидность
 */



/**
 * Изменение ИМЕНИ пользователя
 */
$('#USER_NAME').on('click', function(event) {
    var name = 'name'; // Название элемента localStorage, в который нужно записать новое значение
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo"' +
        'type="text"' +
        'name="newUserName"' +
        'minlength="2"' +
        'maxlength="20"' +
        'title="Имя должно содержать от 2 до 20 символов"' +
        'value="' + oldText + '">';


    editableElement.after(editInput); // Добавить input после текста
    inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
    inputEditUserInfo.focus(); // Поставить фокус на созданном input 


    // При нажатии на Enter, когда input в фокусе
    inputEditUserInfo.keydown(function(event) {
        if (event.which == 13) {
            procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputName, name);
        }
    });

    // Когда элемент теряет фокус
    inputEditUserInfo.blur(function() {
        procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputName, name);
    });
});


/**
 * Изменение ТЕЛЕФОНА пользователя
 */
$('#USER_TEL').on('click', function(event) {
    var tel = 'tel'; // Название элемента localStorage, в который нужно записать новое значение
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo"' +
        'type="tel"' +
        'name="newUserTel"' +
        'title="Введите номер телефона в формате: +7 (555) 555-55-55"' +
        'value="' + oldText + '">';


    editableElement.after(editInput); // Добавить input после текста
    inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
    inputEditUserInfo.mask("+7 (999) 999-99-99", { autoclear: false }); // Маска для ввода телефона
    inputEditUserInfo.focus(); // Поставить фокус на созданном input 


    // При нажатии на Enter, когда input в фокусе
    inputEditUserInfo.keydown(function(event) {
        if (event.which == 13) {
            procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputTel, tel);
        }
    });

    // Когда элемент теряет фокус
    inputEditUserInfo.blur(function() {
        procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputTel, tel);
    });
});


/**
 * Изменение EMAIL пользователя
 */
$('#USER_EMAIL').on('click', function(event) {
    var email = 'email'; // Название элемента localStorage, в который нужно записать новое значение
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo"' +
        'type="email"' +
        'name="newUserEmail"' +
        'maxlength="20"' +
        'title="Адрес электронной почты может содержать до 20 символов"' +
        'value="' + oldText + '">';


    editableElement.after(editInput); // Добавить input после текста
    inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
    inputEditUserInfo.focus(); // Поставить фокус на созданном input 


    // При нажатии на Enter, когда input в фокусе
    inputEditUserInfo.keydown(function(event) {
        if (event.which == 13) {
            procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputEmail, email);
        }
    });

    // Когда элемент теряет фокус
    inputEditUserInfo.blur(function() {
        procedureCloseInput(editableElement, inputEditUserInfo, oldText, isValidInputEmail, email);
    });
});



/**
 * Порядок действий при попытке закрыть input (нажатие Enter, потеря фокуса)
 * @param  {[type]} editableElement      [Редактируемый элемент, на который нажали]
 * @param  {[type]} inputEditUserInfo    [Созданный input]
 * @param  {[type]} oldText              [Старый текст элемента]
 * @param  {[type]} nameFunctionIsValid  [Проверка нового ИМЕНИ на валидность]
 * @param  {[type]} localStorageItemName [Название элемента localStorage, в который нужно записать новое значение]
 */
function procedureCloseInput(editableElement, inputEditUserInfo, oldText, nameFunctionIsValid, localStorageItemName) {
    var newText = inputEditUserInfo.val(); // Текст, который пользователь ввёл в input 
    var changedText = isChangedText(oldText, newText); // Отличается ли текст от старого? 
    // Если текст отличается от старого
    if (changedText) {
        var isValidInput = nameFunctionIsValid(newText); // Проверка нового имени на валидность
        if (isValidInput) {
            writeNewText(editableElement, newText, localStorageItemName); // Записать новый текст
            inputEditUserInfo.remove(); // удалить input
        }
    }
    // Если текст НЕ отличается от старого
    else {
        inputEditUserInfo.remove(); // удалить input
    };
};


/**
 * Проверка нового ИМЕНИ на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputName(newText) {
    var isValid = false,
        newTextLength = newText.length; // Количество символов в новом тексте

    if (newTextLength >= 2 && newTextLength <= 20) {
        isValid = true;
    }

    console.log(
        'Введённое имя:', newText,
        '\nКоличество символов:', newTextLength,
        '\nВалидность введённых данных:', isValid,
        '\n====================');


    return isValid; // true, если новый текст валиден
};


/**
 * Проверка нового ТЕЛЕФОНА на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputTel(newText) {
    var isValid = false,
        newTextLength = newText.length; // Количество лимволов в новом тексте

    var isValidFormat =
        /\+7[\s]\([\d]{3}\)[\s][\d]{3}[\-][\d]{2}[\-][\d]{2}$/.test(newText);
    if (newTextLength == 18 && isValidFormat) {
        isValid = true;
    }

    console.log(
        'Введённый телефон:', newText,
        '\nВерен ли формат телефона:', isValidFormat,
        '\nКоличество символов:', newTextLength,
        '\nВалидность введённых данных:', isValid,
        '\n====================');

    return isValid; // true, если новый текст валиден
};


/**
 * Проверка нового EMAIL на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputEmail(newText) {
    var isValid = false,
        newTextLength = newText.length; // Количество лимволов в новом тексте

    var isValidFormat =
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(newText);

    if (newTextLength <= 20 && isValidFormat) {
        isValid = true;
    }

    console.log(
        'Введённый email:', newText,
        '\nВерен ли формат email:', isValidFormat,
        '\nКоличество символов:', newTextLength,
        '\nВалидность введённых данных:', isValid,
        '\n====================');

    return isValid; // true, если новый текст валиден
};


/**
 * Отличается ли введённый в input текст от старого?
 * @param  {[type]}  oldText [Старый текст]
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если введённый текст отличается от старого]
 */
function isChangedText(oldText, newText) {
    var isNew = false;

    // Если новый текст отличается от старого
    if (oldText != newText) {
        isNew = true;
    };

    return isNew;
};


/**
 * Записать новый текст в тег
 * @param  {[type]} editableElement      [Редактируемый элемент, на который нажали]
 * @param  {[type]} newText              [Текст, который пользователь ввёл в input]
 * @param  {[type]} localStorageItemName [Название элемента localStorage, в который нужно записать новое значение]
 */
function writeNewText(editableElement, newText, localStorageItemName) {
    editableElement.text(newText); // Записать новый текст в тег
    localStorage.setItem('userData.' + localStorageItemName, newText); // Обновить localStorage
};