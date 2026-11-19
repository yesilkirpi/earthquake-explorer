import EarthquakeCard from './EarthquakeCard'

function App() {
  return (
    <div>
      <h1>Earthquake Explorer</h1>
      <EarthquakeCard magnitude={4.7} place="Malatya, Turkey" date="2026-11-09" />
      <EarthquakeCard magnitude={5.1} place="Izmir, Turkey" date="2026-10-04" />
      <EarthquakeCard magnitude={3.8} place="Antalya, Turkey" date="2026-10-29" />
    </div>
  )
}

export default App