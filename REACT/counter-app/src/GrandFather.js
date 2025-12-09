import Father from './Father';

const GrandFather = ({m}) => {
    return(
        <div className="Container">
            <h2>Grandpa Max</h2>
            <h4>{m}</h4>
            <Father m={m} />
        </div>
    )
}

export default GrandFather;