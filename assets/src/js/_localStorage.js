// Информация о пользователе по-умолчанию
const INFO_USER_DEFALT = {
	name: 'Виталя Гора',
	tel: '+7 (440) 554-32-12',
	email: 'vitalya@gora.ru'
};

// Преобразовать объект (данные о пользователе) в JSON 
var userData = JSON.stringify(INFO_USER_DEFALT); 

// Зписать данные о пользователе в localStorage 
localStorage.setItem("userData", userData); 


// Очистить localStorage
$('#localStorageClear').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	localStorage.clear();
});