document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskInput.trim() === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    taskItem.innerHTML = `
        <span>${taskInput} - ${taskCategory} - ${taskDate}</span>
        <div>
            <button onclick="completeTask(this)">✔</button>
            <button onclick="deleteTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    document.getElementById('new-task').value = '';
    document.getElementById('task-category').value = 'General';
    document.getElementById('task-date').value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
