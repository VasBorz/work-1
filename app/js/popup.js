//Создание модуля для попап
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
			positionStyle: 'fixed',
			transition : 'slideDown',
			onClose : function () { // очищает форму при ее закрытии
				$('.alert-fine, .alert-error').hide();
				document.getElementById('form2').reset();
				$('input, textarea').placeholder();
			}
		});
	},
	// Функция добавление проекта
	_addProject = function(e){
		e.preventDefault();

		var form = $(this),
			url = '../add_project.php',
			data = form.serialize();
  		
  		if (!validation.validateForm(form)) return false; // Возвращает false, если не проходит валидацию
		ajax = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		})

		.done(function(ans) {
			var ansFine = $('.alert-fine'),
				ansError = $('.alert-error');

			if (ans.mess === 'OK') {
				console.log(ans);
				ansFine.show();
				ansError.hide();
			}else{
				console.log(ans);
				ansError.show();
				ansFine.hide();
			};

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
if ($('.add-project').length) {
	myModule.init();
}


