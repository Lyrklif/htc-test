/**
 * Подключение всех js-файлов
 */


// Подключение бибилиотек
@@include('assets/src/js/_libs/jquery.js') // jquery 3.3.1
@@include('assets/src/js/_libs/jquery.scrollbar.js') // Для стилизации скроллбара
@@include('assets/src/js/_libs/jquery.maskedinput.min.js') // Маска для input



// Мой код
$(document).ready(function() {
    @@include('assets/src/js/_localStorage.js') // Сохранение введённых пользователем данных
    @@include('assets/src/js/_tabs.js') // Переключение вкладок
    @@include('assets/src/js/_scrollbar.js') // Скроллбар 
    @@include('assets/src/js/_interest.js') // Интересы  
    @@include('assets/src/js/_editText.js') // Изменить текст при клике на него  
});