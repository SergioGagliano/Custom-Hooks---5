import './App.css'
import { useCurrentLocation } from './Custom Hooks/useCurrentLocation ';

function App() {
  const [location, getLocation, loading, error] = useCurrentLocation();

  getLocation;

  if (loading) {
    return <p>Caricamento della posizione...</p>;
  }

  if (error) {
    return <p>Errore: {error.message}</p>;
  }

  if (location) {
    const lat = location.latitude;
    const lon = location.longitude;
    return (
      <div>
        <span>
          <strong>Latitude position:</strong> {lat}
        </span>
        <p>
          <strong>Longitude position:</strong> {lon}
        </p>
      </div>
    );
  }
}


export default App
