import GrandSon from './GrandSon';

const Son = ({m}) => {
    return(
        <div className="Container">
            <h2>Snow (Sand)</h2>
            <h4>{m}</h4>
            <GrandSon m = {m} />
        </div>
    )
}

export default Son;