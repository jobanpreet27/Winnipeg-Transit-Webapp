import React from "react";
import Bus from "./Bus";
function Buses(props) {
  return (
    <>
      {props.data.map(function (bus) {
        return <Bus bus={bus} />;
      })}
    </>
  );
}

export default Buses;
