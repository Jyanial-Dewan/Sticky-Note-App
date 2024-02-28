const taskInput = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn')
const taskList = document.querySelector('.task-list')

addBtn.addEventListener('click', () =>{
    if(taskInput.value.trim().length == "")
    return;

    // Creating the div with JavaScript//

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskList.appendChild(taskContainer);

    const taskText = document.createElement('p');
    taskText.id = 'task-text';
    taskText.innerText = taskInput.value;
    taskContainer.appendChild(taskText);


    //edit button
    
    const editBtn = document.createElement('button');
    editBtn.id = 'edit-btn';
    const editImage = document.createElement('img');
    editImage.src='edit.png';
    editBtn.appendChild(editImage);

    taskContainer.appendChild(editBtn);

    editBtn.addEventListener('click', ()=>{
        taskInput.value = taskText.innerText;
        const parent = editBtn.parentElement;
        parent.parentElement.removeChild(parent);

    });

    //delete button
    
    const deleteBtn = document.createElement('button');
    editBtn.id = 'delete-btn';
    const deleteImage = document.createElement('img');
    deleteImage.src='bin.png';
    deleteBtn.appendChild(deleteImage);

    taskContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', ()=>{
        const parent = deleteBtn.parentElement;
        parent.parentElement.removeChild(parent);
    });

    

taskInput.value = "";

    
});