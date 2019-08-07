$(document).ready(function() {
    $('.editText').on('click', function(event) {

        var oldText = $(this).html();
        var editInput = '<input class="newText" type="text" name="editableText" value="' + oldText + '">';

        // Добавить элемент в начало списка
        $(this).after(editInput);

        var newText = $(this).find('.newText');

        $('.newText').focus();
        // console.log(newText);


       
		// Событие когда элемент получил фокус
		// $(newText).focus(function(){
		//     alert('Фокус установлен');
		// });

		// Когда элемент теряет фокус
		newText.blur(function(){
		    console.log('Фокус снят');
		});
    });
});

