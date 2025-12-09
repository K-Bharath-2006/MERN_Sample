import Button from './Button'
import "./App.css";

const ButtonContainer = ({handleIncrement,handleDecrement}) => {
  return (
    <div className='buttons'>
      <Button txt = {"Increment"} func = {handleIncrement} as = {"inc"}></Button>
      <Button txt = {"Decrement"} func = {handleDecrement} as = {"dec"}></Button>
    </div>
  );
};

export default ButtonContainer;
