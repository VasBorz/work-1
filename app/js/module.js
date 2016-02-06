//Создание своего модуля
var myModule = (function () {

	// Иницилизация модуля
	var init = function(){
		_setUpListener();
	},

	// Прослушивает события 
	_setUpListener = function(){
		$('.add-project').on('click', _showmodal); // Запуск модального окна
		$('.form-add-project').on('submit', _addProject); // Добавление проекта
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
		console.log('Добавление проекта');
	};
	
	// Возращает обект к которому можно обращатся
	return {
		init : init
	}
}) ();

//Визов самого модуля
myModule.init();