import { useState, useEffect } from 'react'
import EarthquakeCard from './EarthquakeCard'

const URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=4&minlatitude=35.5&maxlatitude=42.5&minlongitude=25.5&maxlongitude=45&limit=50&orderby=time'

function App() {
  const [earthquakes, setEarthquakes] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setEarthquakes(data.features))

  }, [])
  return (
    <div>
      <h1>Earthquake Explorer</h1>
      {earthquakes.map((eq) => (
        <EarthquakeCard
          key={eq.id}
          magnitude={eq.properties.mag}
          place={eq.properties.place}
          date={new Date(eq.properties.time).toLocaleDateString()}
        />
      )
      )}
    </div>
  )
}

export default App