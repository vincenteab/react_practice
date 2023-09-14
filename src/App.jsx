import { useState } from "react"

export default function App(){
  //whatever is in the () of useState will be initialized to newItem
  //setNewItem is going to update newItem acting like a "setter" in OOP 
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [...currentTodos,
      {id: crypto.randomUUID(), title: newItem, completed: false},
    ]
    }) 
  }
console.log(todos)
  return(
    <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row"> 
      <label htmlFor="item">New Item</label>
      <input
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>)
    })}
  </ul>
  </> 
  )
  
  

}