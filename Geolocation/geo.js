const d = document, n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    },
    success = position => {
      let coords = position.coords;

      $id.innerHTML = `
        <ul>
          <li>Latitude: <b>${coords.latitude}</b></li>
          <li>Longitude: <b>${coords.longitude}</b></li>
          <li>Accuracy: <b>${Math.floor(coords.accuracy)}</b> metters</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Watch Location</a>
      `
    },
    error = err => {
      $id.innerHTML = `<mark>Error ${err.code}: ${err.message}</mark>`
    };

  n.geolocation.getCurrentPosition(success, error, options)
}