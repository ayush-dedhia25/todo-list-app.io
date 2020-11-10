const container = document.querySelector('.todoContainer');

async function displayData() {
   const res = await fetch('http://localhost:3000/todos');
   const data = await res.json();
   
   let template = '';
   
   data.forEach(todo => {
      template += `
         <div class="todo">
            <p class="todoItem">${todo.todoName}</p>
            <span>
               <i class="fal fa-trash" onClick="deleteTodo(${todo.id})"></i>
               <a href="../update.html?id=${todo.id}"><i class="fal fa-edit"></i></a>
            </span>
         </div>
      `;
   });
   
   container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', displayData);

async function deleteTodo(id) {
   await fetch('http://localhost:3000/todos/'+id, {
      method: 'DELETE'
   })
   .then(_ => {alert('Todo got deleted!'); displayData();})
   .catch(err => alert(err));
}

async function updateTodo() {
   
}

async function findTodoById() {
   
}

async function createTodo(e) {
   e.preventDefault();

   const todoObj = {
      todoName: form.todoName.value,
      isCompleted: false
   }
   
   await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoObj)
   })
   .then(_ => {
      window.location.replace('/index.html');
      alert('Todo created! Yay...');
   })
   .catch(err => alert(err));
}