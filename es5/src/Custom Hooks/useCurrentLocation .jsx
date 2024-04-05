import { useState, useEffect } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getLocation() {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }

  useEffect(() => {
    getLocation();
  }, []);

  return [location, getLocation, loading, error];
}
