let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const errorMsg = document.getElementById('errorMsg');

function showError(message) {
    errorMsg.textContent = message;
}

function clearError() {
    errorMsg.textContent = '';
}

function addTask(taskName) {
    tasks.push(taskName);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener('click', () => {
    const taskName = taskInput.value.trim();

    if (taskName === '') {
        showError('Vui lòng nhập vào nội dung công việc');
    } else if (taskName.length > 30) {
        showError('Vui lòng nhập Nội dung công việc có độ dài nhỏ hơn 30 ký tự');
    } else {
        clearError();
        addTask(taskName);
        taskInput.value = '';
    }
});
