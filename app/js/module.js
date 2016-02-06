//Создание своего модуля
var myModule = (function () {

	// Иницилизация модуля
	var init = function(){
		_setUpListener();
	},

	// Прослушивает события 
	_setUpListener = function(){
		$('.add-project').on('click', _showmodal); // Запуск модального окна
		$('.form-add-project').live('submit', _addProject); // Добавление проекта
	},

	// Функция вызова модального окна
	_showmodal = function (e) {
		e.preventDefault();
		$('.add-poject-popup').bPopup({
			speed : 500,
			transition : 'slideDown'
		});
	},

	_addProject = function(e){
		e.preventDefault();
		var form = $(this),
			url = '../add_project.php',
			data = form.serialize();

		console.log(this);
		console.log(data);

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log("success");
			console.log(ans);
			console.log(data.mess);

		})
		.fail(function() {
			console.log("error");
		})
		
	};
	
	// Возращает обект к которому можно обращатся
	return {
		init : init
	}
}) ();

//Визов самого модуля
myModule.init();