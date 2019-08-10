/**
 * При нажатии на ИМЯ/ТЕЛЕФОН/EMAIL пользователя появляется input,
 * в котором можно изменить эти данные
 *
 * Функции: 
 * procedureCloseInput - Порядок действий при попытке закрыть input (нажатие Enter, потеря фокуса)
 * isChangedText - Отличается ли введённый в input текст от старого?
 * writeNewText - Записать новый текст в тег
 * 
 * isValidInputName - Проверка нового имени на валидность
 * isValidInputTel - Проверка нового телефона на валидность
 * isValidInputEmail - Проверка нового email на валидность
 * 
 * 
 */



// Изменение ИМЕНИ пользователя
$('#USER_NAME').on('click', function(event) {
    let name = 'name';
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo" type="text" name="newUserName" minlength="2" maxlength="20" title="От 2 до 20 символов" value="' + oldText + '">';


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


// Изменение ТЕЛЕФОНА пользователя
$('#USER_TEL').on('click', function(event) {
    let tel = 'tel';
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo" type="tel" name="newUserTel" minlength="18" maxlength="18" title="В формате +7 (999) 999-99-99" value="' + oldText + '">';


    editableElement.after(editInput); // Добавить input после текста
    inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
    inputEditUserInfo.inputmask('+7 (999) 999-99-99');
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


// Изменение EMAIL пользователя
$('#USER_EMAIL').on('click', function(event) {
    let email = 'email';
    var editableElement = $(this); // Редактируемый элемент, на который нажали
    var oldText = editableElement.html(); // Старый текст элемента

    // input для ввода новой информации
    editInput =
        '<input class="inputEditUserInfo" type="email" name="newUserEmail" minlength="6" maxlength="20" value="' + oldText + '">';


    editableElement.after(editInput); // Добавить input после текста
    inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
    // inputEditUserInfo.inputmask('email');
    inputEditUserInfo.inputmask({
        mask: "email",
        greedy: false,
        onBeforePaste: function(pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]",
                casing: "lower"
            }
        }
    });
    // inputEditUserInfo.attr({
    //     data - inputmask - regex: '[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]',
    //     title: 'Введите адрес электронной почты в формате: vitalya@gora.ru'
    // });

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
    let newText = inputEditUserInfo.val(); // Текст, который пользователь ввёл в input 
    let changedText = isChangedText(oldText, newText); // Отличается ли текст от старого? 
    if (changedText) {
        let isValidInput = nameFunctionIsValid(newText); // Проверка нового имени на валидность
        if (isValidInput) {
            writeNewText(editableElement, newText, localStorageItemName); // Записать новый текст
            inputEditUserInfo.remove(); // удалить input
        } else {
            // inputEditUserInfo.addClass('notValid');
        }
    } else {
        inputEditUserInfo.remove(); // удалить input
    };
};


/**
 * Проверка нового ИМЕНИ на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputName(newText) {
    let isValid = false;

    let newTextLength = newText.length;

    if (newTextLength >= 2 && newTextLength <= 20) {
        isValid = true;
    }

    console.log('Введённое имя:', newText);
    console.log('Количество символов:', newTextLength);
    console.log('Валидность введённых данных:', isValid);

    return isValid;
};


/**
 * Проверка нового ТЕЛЕФОНА на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputTel(newText) {
    let isValid = false;
    let newTextLength = newText.length;

    let isValidFormat = /^\+[7]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/.test(newText);
    telephoneCheck(newText);
    if (newTextLength == 18 && isValidFormat) {
        isValid = true;
    }

    console.log('Введённый телефон:', newText);
    console.log('Верен ли формат телефона:', isValidFormat);
    console.log('Количество символов:', newTextLength);
    console.log('Валидность введённых данных:', isValid);

    return isValid;
};


/**
 * Проверка нового EMAIL на валидность
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если новый текст валиден]
 */
function isValidInputEmail(newText) {
    let isValid = false;
    newTextLength = newText.length;

    let isValidFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(newText);

    if (newTextLength >= 6 && newTextLength <= 20 && isValidFormat) {
        isValid = true;
    }

    console.log('Введённый email:', newText);
    console.log('Верен ли формат email:', isValidFormat);
    console.log('Количество символов:', newTextLength);
    console.log('Валидность введённых данных:', isValid);

    return isValid;
};


/**
 * Отличается ли введённый в input текст от старого?
 * @param  {[type]}  oldText [Старый текст]
 * @param  {[type]}  newText [Текст, который пользователь ввёл в input]
 * @return {Boolean}         [true, если введённый текст отличается от старого]
 */
function isChangedText(oldText, newText) {
    let isNew = false;

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