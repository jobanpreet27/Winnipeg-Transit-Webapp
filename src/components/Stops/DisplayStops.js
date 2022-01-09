import { data } from "jquery";
import React from "react";
import Stop from "./Stop";
function DisplayStops(props) {
  return (
    <ul className="stops_list">
      {props.data.map(function (stop) {
        return <Stop stop={stop} />;
      })}
    </ul>
  );
}
export default DisplayStops;
