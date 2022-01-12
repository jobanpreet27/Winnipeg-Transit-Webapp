import React from "react";
import Stop from "./Stop";

function DisplayStops(props) {
  if (!props.data) {
    props.data = [];
  }
  console.log(props.data);
  return (
    <ul className="stops_list">
      {props.data.map(function (stop) {
        return <Stop stop={stop} />;
      })}
    </ul>
  );
}
export default DisplayStops;
