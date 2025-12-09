import Son from './Son';

const Father = ({m}) => {
    return(
        <div className="Container">
            <h2>Father Stark</h2>
            <h4>{m}</h4>
            <Son m = {m} />
        </div>
    )
}

export default Father;