import React from "react";
import Stop from "./Stop";

function DisplayStops(props) {
  if (!props.data) {
    props.data = [];
  }
  return (
    <ul className="stops_list">
      {props.data.map(function (stop) {
         return <Stop key={stop.key} stop={stop} />;
      })}
    </ul>
  );
}
export default DisplayStops;
