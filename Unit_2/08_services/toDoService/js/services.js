app.factory('jnTaskService', function() {
    return {
        addTask: function(view) {
            view.tasks.push(view.newTask);
            view.newTask = '';
        },
        editTask: function(index, view) {
            view.edit = index;
        },
        deleteTask: function(index, view) {
            view.tasks.splice(index, 1);
            view.edit = view.edit === index ? null : view.edit - 1;
            view.showButtonsFor = null;
        },
        confirmEdit: function(index, view, newText) {
            view.tasks[index] = newText
            view.edit = null;
        },
        showButtons: function(index, view) {
            view.showButtonsFor = index;
        },
        hideButtons: function(view) {
            view.showButtonsFor = null;
        }
    };
});
