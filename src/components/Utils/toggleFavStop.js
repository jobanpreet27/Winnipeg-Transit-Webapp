function saveStop(number) {
  let favoriteStops = JSON.parse(localStorage.getItem("favorite-stops"));
  const index = favoriteStops.indexOf(number);
  //if there are 1 or more stored stops
  if (favoriteStops) {
    //if stop is not in fav list
    if (index == -1) {
      favoriteStops.push(number);
      console.log("added");
    }
    // if stop in fav list
    else {
      favoriteStops.splice(index, 1);
      console.log("removed");
    }
  }
  //if there is no stop stored
  else {
    favoriteStops = [number];
  }
  localStorage.setItem("favorite-stops", JSON.stringify(favoriteStops));
}
export default saveStop;
