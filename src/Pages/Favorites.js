import React from "react";
import DisplayStops from "../components/Stops/DisplayStops";
import { AiOutlineHeart } from "react-icons/ai";

function Favorites() {
  const favList = JSON.parse(localStorage.getItem("favorite-stops"));
  return favList.length == "0" ? (
    <div style={{ textAlign: "center" }}>
      <h2>You do have any Favorite Stop</h2>
      <h3>
        Click <AiOutlineHeart size="2rem" /> to add to Favorite List
      </h3>
    </div>
  ) : (
    <div className="container">
      <DisplayStops data={favList} />
    </div>
  );
}

export default Favorites;
