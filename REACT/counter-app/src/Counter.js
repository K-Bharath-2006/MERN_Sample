import "./App.css";
import ButtonContainer from './ButtonContainer'

const Counter = ({ val, handleIncrement, handleDecrement }) => {
    let v = null;
    if(val < 0){
        v = <p>Negative</p>
    }
    else if(val > 1){
        v = <p>Positive</p>
    }
  return (
    <div className="counter">
      <h1>{val}</h1>
      {/* {val < 0 ? <p>Negative</p> : null } */}
      {v}
      <ButtonContainer handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} />
    </div>
  );
};

export default Counter;
