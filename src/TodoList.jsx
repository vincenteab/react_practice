import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (
        <ul className="list">
    {todos.length == 0 && "No todos"}
    {todos.map(todo => {
      return (
        <TodoItem
        {...todo} 
        id={todo.id} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      )
    })}
  </ul>
    )
}