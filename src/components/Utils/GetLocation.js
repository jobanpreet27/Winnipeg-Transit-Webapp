const defaultCoords = "49.89242728391351--97.14950606321388";

function GetLocation(setCoords) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  function success(pos) {
    setCoords(pos.coords.latitude + "-" + pos.coords.longitude);
  }
  function error(err) {
    console.warn(`ERROR (${err.code}): ${err.message}`);
    setCoords(defaultCoords);
  }
}
export default GetLocation;
