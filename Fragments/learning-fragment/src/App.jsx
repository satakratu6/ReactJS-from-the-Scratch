import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErroMessage from "./components/ErroMessage";
function App() {
  let foodItems = ["Dal", "Green", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Fragment</h1>
      <ErroMessage items={foodItems}></ErroMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
