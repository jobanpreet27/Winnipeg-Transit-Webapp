import React from "react";
import DisplayStops from "../components/Stops/DisplayStops";

function Favorites() {
  const favList = JSON.parse(localStorage.getItem("favorite-stops"));
  return (
    <div className="container">
      <DisplayStops data={favList} />
    </div>
  );
}

export default Favorites;
