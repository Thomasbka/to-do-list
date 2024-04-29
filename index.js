$(document).ready(function() {
  var todoList = $('#todo-list');
  var todoInput = $('#todo-input');
  var addButton = $('#add-button');
  var todoCount = 0;

  var addTodo = function() {
    var todoCol = $('<div>', { class: 'col-xs-12 todo' });
    var todoRow = $('<div>', { class: 'row' });
    var h5 = $('<h5>', { class: 'col-xs-8', text: todoInput.val() });

    var successButton = $('<button>', {
      class: 'btn btn-success',
      text: 'DONE'
    }).click(function() {
      var textElement = $(this).parent().find('h5');
      textElement.toggleClass('strike');
    });

    var removeButton = $('<button>', {
      class: 'btn btn-danger remove-button',
      text: 'REMOVE'
    }).click(function() {
      $(this).closest('.col-xs-12.todo').remove();
    });

    todoRow.append(h5, successButton, removeButton);
    todoCol.append(todoRow);
    todoList.append(todoCol);
  };

  var checkThenAddTodo = function() {
    if (todoCount < 10 && todoInput.val() !== '') {
      addTodo();
      todoCount++;
      todoInput.val('');
    }
  }

  addButton.click(checkThenAddTodo);

  todoInput.keyup(function(event) {
    if (event.key === "Enter") {
      checkThenAddTodo();
    }
  });
});
