function todoList(todos) {
  // Write your code here...
  var content = document.querySelector('#content');
  var ul = document.createElement('ul');
  content.appendChild(ul);

  todos.forEach((element) => {
    let li = document.createElement('li');
    li.innerText = element.todo;
    ul.appendChild(li);

    //adding event listener and line-through style
    
    li.addEventListener("click", strikeThrough);
    function strikeThrough() {
      if (li.style.textDecorationLine === 'line-through'){
      li.style.textDecorationLine = 'initial';
    } else {
      li.style.textDecorationLine = 'line-through';
    }
    }
    
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);