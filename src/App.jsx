import { useState, useEffect } from 'react'
import EarthquakeCard from './EarthquakeCard'

const URL = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=3&minlatitude=35.5&maxlatitude=42.5&minlongitude=25.5&maxlongitude=45&starttime=${startDate}&limit=200&orderby=time`

function App() {
  const [earthquakes, setEarthquakes] = useState([])
  const [minMagnitude, setMinMagnitude] = useState(3)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed')
        }
        return response.json()
      })
      .then((data) => {
        setEarthquakes(data.features)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load earthquake data.')
        setLoading(false)
      })
  }, [])

  const filtered = earthquakes.filter(
    (eq) => eq.properties.mag >= minMagnitude
  )

  return (
    <div className="app">
      <h1>Earthquake Explorer</h1>

      <label>
        Minimum magnitude:{' '}
        <select
          value={minMagnitude}
          onChange={(e) => setMinMagnitude(Number(e.target.value))}
        >
          <option value={3}>3.0+</option>
          <option value={4}>4.0+</option>
          <option value={5}>5.0+</option>
          <option value={6}>6.0+</option>
        </select>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <p>Showing {filtered.length} earthquakes</p>
      )}

      <div className="cards">
        {filtered.map((eq) => (
          <EarthquakeCard
            key={eq.id}
            magnitude={eq.properties.mag}
            place={eq.properties.place}
            date={new Date(eq.properties.time).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  )
}

export default App