// При клике на редактируемый текст (информация о пользователе)
// появляется input, в котором можно изменить данные.
// После этого новый текст изменяется и на странице,
// а также сохранится в localStorage

// $('.editText').on('click', function(event) {
//     var editableElement = $(this); // Редактируемый элемент, на который нажали
//     var oldText = editableElement.html(); // Старый текст элемента
//     var editableElementID = editableElement.attr('id'); //ID редактируемого элемента

//     // Создание input для ввода новой информации
//     // var editInput = '<input class="inputEditUserInfo" type="text" name="newUserInfo" value="' + oldText + '">';



//     var editInput = '<input class="inputEditUserInfo" type="text">';
//     var inputEditUserInfo; // Созданный input


//     switch (editableElementID) {
//         // Редактирование имени пользователя
//         case 'USER_NAME':
//             editInput =
//                 '<input class="inputEditUserInfo" type="text" name="newUserName" maxlength="20" minlength="2" value="' + oldText + '">';

//             editableElement.after(editInput); // Добавить input после текста
//             inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
//             break;

//             // Редактирование телефона пользователя
//         case 'USER_TEL':
//             editInput =
//                 '<input class="inputEditUserInfo" type="tel" name="newUserTel" maxlength="18" minlength="18" value="' + oldText + '">';
//             editableElement.after(editInput); // Добавить input после текста
//             inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
//             inputEditUserInfo.inputmask('+7 (999) 999-99-99');
//             break;

//             // Редактирование email пользователя
//         case 'USER_EMAIL':
//             editInput =
//                 '<input class="inputEditUserInfo" type="email" name="newUserEmail" maxlength="20" minlength="6" value="' + oldText + '">';
//             editableElement.after(editInput); // Добавить input после текста
//             inputEditUserInfo = editableElement.next('.inputEditUserInfo'); // Найти созданный input
//             inputEditUserInfo.inputmask('email');
//             break;

//         default:
//             console.log("Новый редактируемый элемент. Для него нужно прописать правила в js");
//             break;
//     };




//     inputEditUserInfo.focus(); // Поставить фокус на созданном input 

//     // При нажатии на Enter, когда input в фокусе
//     inputEditUserInfo.keydown(function(event) {
//         if (event.which == 13) {
//             writeNewText();
//         }
//     });

//     // Когда элемент теряет фокус
//     inputEditUserInfo.blur(function() {
//         writeNewText();
//     });

//     // Отобразить новый текст на странице и закрыть input
//     function writeNewText() {
//         let newText = inputEditUserInfo.val(); // Текст, который пользователь изменил в input

//         // Если текст отличается от того, который был изначально
//         if (oldText != newText) {

//             // Действия в зависимости от того, на какой элемент нажали
//             switch (editableElementID) {
//                 // Редактирование имени пользователя
//                 case 'USER_NAME':
//                     let isValidName = isValidInputName(newText);
//                     if (isValidName) {
//                         editableElement.text(newText); // Записать новый текст в тег
//                         localStorage.setItem('userData.name', newText); // Обновить localStorage
//                     } else {

//                     };
//                     break;

//                     // Редактирование телефона пользователя
//                 case 'USER_TEL':
//                     let isValidTel = isValidInputTel(newText);
//                     if (isValidTel) {
//                         editableElement.text(newText); // Записать новый текст в тег
//                         localStorage.setItem('userData.tel', newText); // Обновить localStorage
//                     };
//                     break;

//                     // Редактирование email пользователя
//                 case 'USER_EMAIL':
//                     let isValidEmail = isValidInpuEmail(newText);
//                     if (isValidEmail) {
//                         editableElement.text(newText); // Записать новый текст в тег
//                         localStorage.setItem('userData.email', newText); // Обновить localStorage
//                     };
//                     break;

//                 default:
//                     console.log("Новый редактируемый элемент. Для него нужно прописать правила в js");
//                     break;
//             };

//         };

//         inputEditUserInfo.remove(); // удалить input

//     };



// // Проверка нового номера телефона на валидность
// function isValidInputTel(a) {
//     let newText = a,
//         isValid;

//     let newTextLenth = newText.length;

//     if (newTextLenth == 18) {
//         isValid = true;
//     }

//     console.log(newTextLenth, isValid);

//     return isValid;
// };

// // Проверка нового email на валидность
// function isValidInpuEmail(a) {
//     let newText = a,
//         isValid;
//     newTextLenth = newText.length;


//     var regex = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
//     regexValue = regex.test(newText);

//     if (newTextLenth > 6 && newTextLenth <= 20 && regexValue) {
//         isValid = true;
//     }


//     console.log(newTextLenth, isValid);

//     return isValid;
// };










// ********************************************************
// ********************************************************
// ********************************************************
// ********************************************************
// ********************************************************
// ********************************************************
// ********************************************************





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


// Порядок действий при попытке закрыть input (нажатие Enter, потеря фокуса)
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

// Проверка нового имени на валидность
function isValidInputName(newText) {
    let isValid = false;

    let newTextLenth = newText.length;

    if (newTextLenth >= 2 && newTextLenth <= 20) {
        isValid = true;
    }

    console.log(newTextLenth, isValid);

    return isValid;
};

// Проверка нового номера телефона на валидность
function isValidInputTel(newText) {
    let isValid = false;
    let newTextLenth = newText.length;

    let isValidFormat = /^\+[7]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/.test(str);
    telephoneCheck(newText);
    if (newTextLenth == 18 && isValidFormat) {
        isValid = true;
    }

    console.log('Верен ли формат телефона:', isValidFormat);
    console.log('Количество символов:', newTextLenth);
    console.log('Валидность введённых данных:' isValid);

    return isValid;
};


// Отличается ли текст от старого?
function isChangedText(oldText, newText) {
    let isNew;

    if (oldText != newText) {
        isNew = true;
    };

    return isNew;
};


// Записать новый текст в тег
function writeNewText(editableElement, newText, localStorageItemName) {
    editableElement.text(newText); // Записать новый текст в тег
    localStorage.setItem('userData.' + localStorageItemName, newText); // Обновить localStorage
};