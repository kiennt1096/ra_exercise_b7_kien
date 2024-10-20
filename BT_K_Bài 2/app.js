let students = [];

const studentIdInput = document.getElementById('studentId');
const studentNameInput = document.getElementById('studentName');
const birthYearInput = document.getElementById('birthYear');
const classNameInput = document.getElementById('className');
const addStudentBtn = document.getElementById('addStudentBtn');
const studentList = document.getElementById('studentList');
const errorMsg = document.getElementById('errorMsg');

function showError(message) {
    errorMsg.textContent = message;
}

function clearError() {
    errorMsg.textContent = '';
}

function addStudent(student) {
    students.push(student);
    renderStudents();
}

function renderStudents() {
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.id} - ${student.name} - ${student.birthYear} - ${student.className}`;

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.classList.add('edit');


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';


        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        li.appendChild(buttons);
        studentList.appendChild(li);
    });
}

addStudentBtn.addEventListener('click', () => {
    const id = studentIdInput.value.trim();
    const name = studentNameInput.value.trim();
    const birthYear = birthYearInput.value.trim();
    const className = classNameInput.value.trim();

    if (id === '' || name === '' || birthYear === '' || className === '') {
        showError('Vui lòng nhập đầy đủ thông tin sinh viên');
    } else {
        clearError();

        const student = {
            id,
            name,
            birthYear,
            className
        };

        addStudent(student);

        studentIdInput.value = '';
        studentNameInput.value = '';
        birthYearInput.value = '';
        classNameInput.value = '';
        renderStudents();
    }
});
