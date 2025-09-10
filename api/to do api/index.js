const todoApi=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const data=await res.json()
    console.log(data[0])
    console.log('hello')
    displayData(data)
}
// {
//     "userId": 10,
//     "id": 197,
//     "title": "dignissimos quo nobis earum saepe",
//     "completed": true
// }
const displayData=(todos)=>{
    const todo=document.getElementById('todo')
    todo.innerHTML=''
    todos.forEach(element => {
        const todoList=document.createElement('li')
        todoList.innerHTML=
        `<p>${element.userId}</p>
<h4>${element.title}</h4>
<input type="checkbox" name="" id=" "  ${element.completed ? 'checked' : ''}>
<p>${element.completed ? '✅' : '❌' }</p>
        `
        todo.appendChild(todoList)
    });
}
todoApi()