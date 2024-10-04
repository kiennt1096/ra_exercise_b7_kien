let students = [];
let editIndex = -1;

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
        editButton.addEventListener('click', () => editStudent(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', () => deleteStudent(index));

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        li.appendChild(buttons);
        studentList.appendChild(li);
    });
}

function editStudent(index) {
    const student = students[index];
    studentIdInput.value = student.id;
    studentNameInput.value = student.name;
    birthYearInput.value = student.birthYear;
    classNameInput.value = student.className;
    addStudentBtn.textContent = 'Cập nhật sinh viên';
    editIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
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

        if (editIndex === -1) {
            addStudent(student);
        } else {
            students[editIndex] = student;
            editIndex = -1;
            addStudentBtn.textContent = 'Thêm sinh viên';
        }

        studentIdInput.value = '';
        studentNameInput.value = '';
        birthYearInput.value = '';
        classNameInput.value = '';
        renderStudents();
    }
});
