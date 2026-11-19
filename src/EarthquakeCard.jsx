function EarthquakeCard(props) {
    let level = 'low'
    if (props.magnitude >= 5) {
        level = 'high'
    } else if (props.magnitude >= 4) {
        level = 'medium'
    }

    return (
        <div className={`card ${level}`}>
            <h2>M{props.magnitude}</h2>
            <p>{props.place}</p>
            <p className="date">{props.date}</p>
        </div>
    )
}

export default EarthquakeCard