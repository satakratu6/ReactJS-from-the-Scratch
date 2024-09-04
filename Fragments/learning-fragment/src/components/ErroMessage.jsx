const ErroMessage = ({ items }) => {
  let foodItems = ["Dal", "Green", "Roti", "Salad", "Milk"];
  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};
export default ErroMessage;
