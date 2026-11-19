function EarthquakeCard(props) {
    return (
        <div>
            <h2>M{props.magnitude}</h2>
            <p>{props.place}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default EarthquakeCard