import React from "react";
import Moment from "moment";

function Bus(props) {
  const bus = props.bus;
  const busTime = Moment(bus.estimatedDepart.substring(11), "HH:mm:ss a");
  const currentTime = Moment(Moment().format("HH:mm:ss"), "HH:mm:ss a");
  const duration = parseInt(
    Moment.duration(busTime.diff(currentTime)).asSeconds() / 60 + 1
  );
  console.log(Moment.duration(busTime.diff(currentTime)).get("seconds"));
  return (
    <div className="stop">
      <h4>
        {props.bus.number} {props.bus.variantname}
      </h4>
      <h4>
        {duration <= 15 && duration > 0
          ? duration + " min"
          : Moment(bus.estimatedDepart, "YYYY-MM-DD hh:mm:ss").format("h:mm a")}
      </h4>
    </div>
  );
}

export default Bus;
