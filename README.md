**Ссылка** - https://lyrklif.github.io/htc-test/assets/build/  

  
Тестовое задание для стажировки в ЦВТ по направлению фронтенд.  


Для запуска проекта ввести в командную строку:  
1. npm i  
2. gulp  


Папки и файлы проекта  
-----------------------------------
**Готовые файлы**   -  \assets\build\  
**Исходные файлы**  -  \assets\src\  


Где происходит подключение отдельных файлов в общие:  

Тип файлов               | Путь к файлам 
-------------------------|----------------------
html					 | \assets\src\index.html
scss      				 | \assets\src\scss\main.scss
js  					 | \assets\src\js\main.js

  
Общее описание задания
-----------------------------------
### Тестовое задание состоит из нескольких уровней:
1. Сверстать предоставленный макет кроссбраузерно, реализовать переключение
между табами и кастомный скроллбар;
2. Добавить (можно вне предоставленного макета на той же странице) форму
добавления интересов, состоящую из поля ввода названия интереса и кнопки
«Добавить интерес». Валидация поля ввода на свое усмотрение. При нажатии
кнопки «Добавить интерес» интерес должен добавляться в начало списка. При
клике на интересе в списке интерес должен удаляться;
3. Реализовать интерфейс изменения информации о пользователе. При клике на имени
пользователя («Виталя Гора» в макете), телефоне, email вместо текущего значения
должно появляться поле ввода (при этом в нем должно быть сразу подставленное
текущее значение). После снятия фокуса с поля ввода введенное значение должно
сохраняться на странице;
4. Реализовать хранение измененных пользователем значений из пункта 3 в localStorage
(так, чтобы если пользователь изменил имя на «Геннадий Директ», после
закрытия браузера и открытия страницы вновь имя пользователя был Геннадий
Директ).
  
### Требование к реализации
1. Выполненное задание должно соответствовать макету. Плюсом будет мобильная
версия приложения и нормальная работа на мобильных устройствах;
2. Требования по браузерам: Internet Explorer 10+, Chrome, Opera, Yandex Browser,
Firefox последних версий.




