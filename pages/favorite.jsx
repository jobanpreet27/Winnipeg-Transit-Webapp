import DisplayStops from "../components/Stops/DisplayStops";
import { AiOutlineHeart } from "react-icons/ai";

function Favorite() {
  const favList = JSON.parse(localStorage.getItem("favorite-stops"));
  return favList && favList.length != "0" ? (
    <div className="container">
      <DisplayStops data={favList} />
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>
      <h2>You do have any Favorite Stop</h2>
      <h3>
        Click <AiOutlineHeart size="2rem" /> to add to Favorite List
      </h3>
    </div>
  );
}

export default Favorite;