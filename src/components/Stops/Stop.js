import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./../Utils/useFetch";

function Stop(props) {
  const address = "/stop/" + props.stop.key;
  const FetchRoutes = (key) => {
    const { data, loading } = useFetch(
      "https://winnipegtransitserver.herokuapp.com/api/stop-routes/" + key
    );
    return (
      <div>
        {!loading ? (
          data.map((stop) => {
            return stop["number"] + " ";
          })
        ) : (
          <></>
        )}
      </div>
    );
  };
  return (
    <li className="stop">
      <Link to={address} className="stop_link">
        <div className="stop_info">
          <h5>{props.stop.name}</h5>
          <h6 className="stop_buses">{FetchRoutes(props.stop.key)}</h6>
        </div>
        <div className="stop_distance">
          <h6>{props.stop.distances.direct}m</h6>
        </div>
      </Link>
    </li>
  );
}

export default Stop;
