//Модуль валидации и отображение Qtip
var validation = (function (){

	var init = function (){
  	  console.log('Инициализация модуля validation');
      _setUpListeners();
	};

	//Прослушка событий
	var _setUpListeners = function(){
	  $('form').on('keydown', '.has-error', _removeError); // удаляем красную обводку у элементов форм
      $('form').on('click', '.has-error', _removeError); // удаляем красную обводку у элементов форм
      $('form').on('reset', _clearForm); // при сбросе формы удаляем также: тултипы, обводку, сообщение от сервера
	};


	var _removeError = function() { // Убирает красную обводку у элементов форм

      console.log('Красная обводка у элементов форм удалена');
	  $(this).removeClass('has-error');
    };

    var _addError = function(element) {

	    element.addClass('has-error');
	    _createQtip(element, element.attr('qtip-position')); // Cоздает клас (.has-error) с отображением тултипа
	};

	var _clearForm = function(e) { // Очищает форму

	    console.log('Очищаем форму');

	    var form = $(this);
	    form.find('input, textarea').trigger('hideTooltip'); // удаляем тултипы
	    form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку

    };

	//Создание тултипов
	 _createQtip = function(element, position) { 

      // позиция тултипа (left, right)
      if (position === 'right') {
        position = {
          my: 'left center', // позиция стрелки тултипа (слева)
          at: 'right center' // позиция тултипа справа
        };
      } else {
        position = {
          my: 'right center',	// позиция стрелки тултипа (справа)
          at: 'left center',// позиция тултипа слева
          adjust: {
          	method: 'shift none'
          }
        };
      }

      // инициализация тултипа
      element.qtip({
        content: {
          text: function() {
            return $(this).attr('qtip-content');
          }
        },
        show: {
          event: 'show'
        },
        hide: {
          event: 'keydown click hideTooltip'
        },
        position: position,
        style: {
          classes: 'qtip-mystyle qtip-rounded qtip-red',
          tip: {
            height: 8,
            width: 8
          }
        }
      }).trigger('show');

  	};

  	var validateForm = function(form) { // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы

	    var self = this,
	        elements = form.find('input, textarea').not('input[type="hidden"], input[name="filename"]'),
	        valid = true;

	    $.each( elements, function(index, element) {
	    	 console.log(index);
	    	 console.log(element);
	    var  $element = $(element);
	         value = $element.val();

	        if (!value.length) {
	          _addError($element);
	          valid = false;
	        }
	      });

	      return valid;
    };

	return {
		init : init,
		validateForm : validateForm
	}

})();
validation.init();