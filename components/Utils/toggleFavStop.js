import stopsArraySearch from "./stopsArraySearch";

function saveStop(name, key) {
  let favoriteStops = JSON.parse(localStorage.getItem("favorite-stops"));
  //if there are 1 or more stored stops
  if (favoriteStops) {
    const index = stopsArraySearch(favoriteStops, key);
    //if stop is not in fav list
    if (index == -1) {
      favoriteStops.push({ name, key });
      console.log("added", index);
    }
    // if stop in fav list
    else {
      favoriteStops.splice(index, 1);
      console.log("removed");
    }
  }
  //if there is no stop stored
  else {
    favoriteStops = [{ name, key }];
  }
  localStorage.setItem("favorite-stops", JSON.stringify(favoriteStops));
}
export default saveStop;
