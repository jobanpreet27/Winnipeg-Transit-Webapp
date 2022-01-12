import React from "react";
import DisplayStops from "../components/Stops/DisplayStops";

function Favorites() {
  const favList = JSON.parse(localStorage.getItem("favorite-stops"));
  return <DisplayStops data={favList} />;
}

export default Favorites;
