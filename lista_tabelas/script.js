document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name-input');
    const taskDescriptionInput = document.getElementById('task-description-input');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = taskNameInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();
        if (taskName !== '' && taskDescription !== '') {
            addTask(taskName, taskDescription);
            taskNameInput.value = '';
            taskDescriptionInput.value = '';
        }
    });

    function addTask(taskName, taskDescription) {
        const li = document.createElement('li');
        const taskLabel = document.createElement('label');
        taskLabel.innerText = taskName + ' - ' + taskDescription;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', toggleTask);
        li.appendChild(checkBox);
        li.appendChild(taskLabel);
        taskList.appendChild(li);
    }

    function toggleTask() {
        const li = this.parentElement;
        li.classList.toggle('completed');
    }
});
