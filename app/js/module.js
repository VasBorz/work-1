//Создание своего модуля
var myModule = (function () {

	// Иницилизация модуля
	var init = function(){
		_setUpListener();
	};

	// Прослушивает события 
	var _setUpListener = function(){
		$('.add-project').on('click', _showmodal);
	};

	// Функция вызова модального окна
	var _showmodal = function () {
		console.log('Вызов модального окна происходить здесь')
	}

	// Возращает обект к которому можно обращатся
	return {
		init : init
	}
}) ();

//Визов самого модуля
myModule.init();