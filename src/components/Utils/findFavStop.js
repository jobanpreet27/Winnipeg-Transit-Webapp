import stopsArraySearch from "./stopsArraySearch";
function findFavStop(key) {
  const favList = JSON.parse(localStorage.getItem("favorite-stops"));

  // if favlist is not initiated or is empty
  if (!favList || favList.length <= 0) return -1;
  else return stopsArraySearch(favList, key);
}

export default findFavStop;
