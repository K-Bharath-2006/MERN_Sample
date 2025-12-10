const Button = ({txt,func,cn}) => {
    return(
        <button onClick={func} className={cn}>
            {txt}
        </button>
    )
}

export default Button;