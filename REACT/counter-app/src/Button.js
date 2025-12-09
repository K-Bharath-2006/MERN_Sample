import "./App.css";

const Button = ({txt,func,as}) => {
    return(
        <button onClick={func} className={as}>
            {txt}
        </button>
    )
}

export default Button;