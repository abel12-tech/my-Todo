// list of tasks i want to drag or drop it somewhere
const tasks = document.querySelectorAll('.task')
// Columns from or to which i drag or drop the tasks
const columns = document.querySelectorAll('.column')
// Variable that holds the task i want to drag and drop somewhere
let dragItem = null;


//  Interacting to each task by adding the dragstart and dragend event to all items i want to drag and drop it in another column
tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart)
    task.addEventListener('dragend', dragEnd)
});


//  Interacting to each column where you want to take the task from and put
columns.forEach(column => {
    column.addEventListener('drop', dragDrop);
    column.addEventListener('dragover',dragOver)
});

function dragOver(e) {
    e.preventDefault()
  }

// Logic for removing tasks being dragged from its original column and add it to the column you want to drop it


function dragStart() {
    dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}


function dragDrop() {
    console.log('drag dropped');
    this.append(dragItem);
}

function dragEnd() {
    this.className = 'task'
    dragItem = null;
}

//    ===== adding the task===
let form = document.querySelector('.add-task-form')


form.addEventListener('submit',addTask)


function addTask(e){
    e.preventDefault()
    let taskInputValue = document.querySelector('.task-input').value
     
    const div = document.createElement('div')
    div.className = 'task'
    div.appendChild(document.createTextNode(taskInputValue))
   
    let allTaskColumn = document.querySelector('.column')
    allTaskColumn.appendChild(div)

    
    

   
}


