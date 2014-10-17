(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var App = {

		init: function () {
			this.todos = [];
			this.$todoApp = $('#todoapp');
			this.$header = this.$todoApp.find('#header');
			this.$main = this.$todoApp.find('#main');
			this.$newTodo = this.$header.find('#new-todo');
			this.$setHour = this.$header.find('#setHour');
			this.$setMin = this.$header.find('#setMin');
			this.$toggleAll = this.$main.find('#toggle-all');
			this.$todoList = this.$main.find('#todo-list');

			this.bindEvents();
		},

		bindEvents: function () {
			this.$newTodo.on('keyup', this.create.bind(this));
			
			this.$toggleAll.on('change', this.toggleAll.bind(this));

			var list = this.$todoList;

			list.on('change', '.toggle', this.toggle.bind(this));
			list.on('focusout', '.edit', this.update.bind(this));
			list.on('click', '.destroy', this.destroy.bind(this));
		},

		render: function () {
			this.$todoList.empty();
			// create list item structure
			for (var i = 0; i < this.todos.length; i++) {
				var $li = $('<li class="list-view">' +
					'<div class="view">' +
						'<div class="column8 list-col8 list-name listSingle">'+
							'<input class="toggle left displayInline icon-sq list-icon" type="checkbox" >' +
							'<label id="taskName" class="item title list-title list-padding"></label>' +
						'</div>'+		
						'<div class="column3 list-name listSingle" >' +
							'<i class="left displayInline icon-sq list-icon fa flaticon-alarm15"></i>' +
							'<label class="displayHour list-title"></label>' +
							'<div class="left list-title list-padding">hr</div>' +
							'<div class="left list-title list-padding">&nbsp;:</div>' +
							'<label class="displayMin list-title"></label>' +
							'<div class="left list-title list-padding">min</div>' +
						'</div>' +
						'<div class="column1 listSingle">' +
							'<i class="icon-sq list-icon fa fa-check-square-o"></i>'+
							'<button class="list-title btn-done destroy">Done</button>'+
						'</div>' +
					'</div>' +
					'<input class="edit" />' +
					'</li>' +
					'<div style="clear:both></div>');

				var todo = this.todos[i];
				$li.attr('data-id', todo.id);
				$li.find('.title').text(todo.title); 
				$li.find('.displayHour').text(todo.displayHour); 
				$li.find('.displayMin').text(todo.displayMin);  
				if (todo.completed) {
					$li.addClass('completed');
					$li.find('.toggle').prop('checked', true);
				}
				//append the list item structure into this.$todoList
				this.$todoList.append($li);
			}
		},
		// If a todo list item has been completed, the li must have a class="completed",
		//  and the checkbox needs to be checked
		toggleAll: function (e) {
			var isChecked = $(e.target).prop('checked');

			this.todos.forEach(function (todo) {
				todo.completed = isChecked;
			});

			this.render();
		},

		// accepts an element from inside the `.item` div and
		// returns the corresponding index in the `todos` array
		indexFromEl: function (el) {
			var id = $(el).closest('li').data('id');
			var todos = this.todos;
			var i = todos.length;

			while (i--) {
				if (todos[i].id === id) {
					return i;
				}
			}
		},

		create: function (e) {
			var $input = $(e.target);
			var val = $input.val().trim();
			var setHour = $('#setHour').val().trim(); 
			var setMin = $('#setMin').val().trim();

			if (e.which !== ENTER_KEY || !val) {
				return;

			}

			this.todos.push({
				id: this.todos.length + 1,
				title: val,
				displayHour: setHour, // place value @proper place
				displayMin: setMin,
				completed: false
			});

			// clear the text
			$input.val('');
			$('#setHour').val('');
			$('#setMin').val('');

			this.render();
		},

		toggle: function (e) {
			var i = this.indexFromEl(e.target);
			this.todos[i].completed = !this.todos[i].completed;
			this.render();
		},

		update: function (e) {
			var el = e.target;
			var $el = $(el);
			var val = $el.val().trim();

			if ($el.data('abort')) {
				$el.data('abort', false);
				this.render();
				return;
			}

			var i = this.indexFromEl(el);

			if (val) {
				this.todos[i].title = val;
			} else {
				this.todos.splice(i, 1);
			}

			this.render();
		},

		destroy: function (e) {
			this.todos.splice(this.indexFromEl(e.target), 1);
			this.render();
		}
	};

  App.init();

})();

// Show Quite Note textarea box

$(function(){

	$(".noteBtn").click(function(event) {
		// Prevent page reload
		event.preventDefault();
		$(this).next().slideToggle();
	});
});




