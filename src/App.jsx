import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {


  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))

  }

  function handleTodoInput(newTodo) {
    if (newTodo != '') {
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }

  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodos(newTodoList)

  }

  function handleEditValue(index) {
    const newValue = todos[index]
    setTodoValue(newValue)
    handleDelete(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }


    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleTodoInput={handleTodoInput} />
      <TodoList todos={todos} handleDelete={handleDelete} handleEditValue={handleEditValue} />
    </>
  )
}

export default App
