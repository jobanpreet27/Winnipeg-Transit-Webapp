import findFavStop from "../Utils/findFavStop";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import toggleFavStop from "../Utils/toggleFavStop";
import { useState } from "react";

function FavoriteIcon(props) {
  const [isFav, setIsFav] = useState(
    findFavStop(props.stopKey) === -1 ? false : true
  );
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavStop(props.name, props.stopKey);
    setIsFav(!isFav);
  };
  return (
    <button
      type="button"
      className="btn btn-link btn-md p-1"
      onClick={(e) => handleClick(e)}
    >
      {isFav ? <AiFillHeart size="2rem" /> : <AiOutlineHeart size="2rem" />}
    </button>
  );
}

export default FavoriteIcon;
