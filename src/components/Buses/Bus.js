import React from "react";
import Moment from "moment";
import "moment-precise-range-plugin";
import "./Bus.css";

function Bus(props) {
  const bus = props.bus;
  const busTime = Moment(bus.estimatedDepart);
  const currentTime = Moment();
  const scheduledDepart = Moment(bus.scheduledDepart);
  const duration = parseInt(
    Moment.duration(busTime.diff(currentTime)).asSeconds() / 60 + 1
  );
  const diff = Moment(bus.estimatedDepart).diff(scheduledDepart);
  const status = diff > 0 ? "LATE" : diff < 0 ? "EARLY" : "OK";

  return (
    <div className="bus" key={props.bus.scheduledDepart}>
      <h6 className="bus_name">
        {props.bus.number} {props.bus.variantname}
      </h6>
      <h6 className="bus_status">{status}</h6>
      <h6 className="bus_time">
        {duration <= 15 && duration > 0
          ? duration + " min"
          : Moment(bus.estimatedDepart, "YYYY-MM-DD hh:mm:ss").format("h:mm a")}
      </h6>
    </div>
  );
}

export default Bus;
