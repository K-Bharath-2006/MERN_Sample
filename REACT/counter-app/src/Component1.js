const Component1 = (props) => { // probs is the keyword to collect objects and without probs we can directly get the value by using {}
    return(
        <div>
            <h3>This is Component 1</h3>
            <h4>{props.q}</h4>
            <h4>{props.val}</h4>
        </div>
    );
}

export default Component1;
