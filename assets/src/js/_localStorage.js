
/**
 * Изменить отображаемую информацию о пользователе
 */
changeUserInfo();


/**
 * Изменить отображаемую информацию о пользователе
 * Если ранее были изменены данные о пользователе, то 
 * взять эти данные из localStorage и внести на страницу
 */
function changeUserInfo() {
    // Если существует новая версия ИМЕНИ, то внести её на страницу
    if (localStorage.getItem('userData.name')) {
        $('#USER_NAME').html(localStorage.getItem('userData.name'));
    };

    // Если существует новая версия ТЕЛЕФОНА, то внести её на страницу
    if (localStorage.getItem('userData.tel')) {
        $('#USER_TEL').html(localStorage.getItem('userData.tel'));
    };

    // Если существует новая версия EMAIL, то внести её на страницу
    if (localStorage.getItem('userData.email')) {
        $('#USER_EMAIL').html(localStorage.getItem('userData.email'));
    };
};


/**
 * Очистить localStorage при нажатии на кнопку под профайлом пользователя
 */
$('#localStorageClear').on('click', function(event) {
    localStorage.clear(); // очистить localStorage
});