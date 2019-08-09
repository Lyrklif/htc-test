// Подключение бибилиотек
@@include('assets/src/js/_libs/jquery.js')
@@include('assets/src/js/_libs/jquery.scrollbar.js')
@@include('assets/src/js/_libs/jquery.inputmask.js')
@@include('assets/src/js/_libs/inputmask.binding.js')

//jquery.inputmask
//inputmask.binding



// Мой код
$(document).ready(function() {
    @@include('assets/src/js/_localStorage.js') // Сохранение введённых пользователем данных
    @@include('assets/src/js/_tabs.js') // Переключение вкладок
    @@include('assets/src/js/_scrollbar.js') // Скроллбар 
    @@include('assets/src/js/_interest.js') // Интересы  
    @@include('assets/src/js/_editText.js') // Изменить текст при клике на него  
});