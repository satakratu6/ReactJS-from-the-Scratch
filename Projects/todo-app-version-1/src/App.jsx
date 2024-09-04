import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./style2.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
