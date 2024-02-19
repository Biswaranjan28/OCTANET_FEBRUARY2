function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <div>
                <button onclick="completeTask(this)">Completed</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.closest('.task');
    taskItem.style.backgroundColor = '#2ecc71'; // Change color to green
}

function deleteTask(button) {
    const taskItem = button.closest('.task');
    taskItem.style.animation = 'fadeOutRight 0.5s ease';
    setTimeout(() => {
        taskItem.remove();
    }, 500);
}
