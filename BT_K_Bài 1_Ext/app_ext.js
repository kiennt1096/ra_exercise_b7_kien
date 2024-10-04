let tasks = [];
let editIndex = -1;

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
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', () => deleteTask(index));

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        li.appendChild(buttons);
        taskList.appendChild(li);
    });
}

function editTask(index) {
    taskInput.value = tasks[index];
    addTaskBtn.textContent = 'Cập nhật công việc';
    editIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskBtn.addEventListener('click', () => {
    const taskName = taskInput.value.trim();

    if (taskName === '') {
        showError('Vui lòng nhập vào nội dung công việc');
    } else if (taskName.length > 30) {
        showError('Vui lòng nhập Nội dung công việc có độ dài nhỏ hơn 30 ký tự');
    } else {
        clearError();

        if (editIndex === -1) {
            addTask(taskName);
        } else {
            tasks[editIndex] = taskName;
            editIndex = -1;
            addTaskBtn.textContent = 'Thêm công việc';
        }

        taskInput.value = '';
        renderTasks();
    }
});
