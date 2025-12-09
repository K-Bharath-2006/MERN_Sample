import "./App.css";
import ButtonContainer from './ButtonContainer'

const Counter = ({ val, handleIncrement, handleDecrement }) => {
  return (
    <div className="counter">
      <h1>{val}</h1>
      <ButtonContainer handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} />
    </div>
  );
};

export default Counter;
