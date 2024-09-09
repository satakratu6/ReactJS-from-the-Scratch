import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
