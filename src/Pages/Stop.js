import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/Utils/useFetch";
import Buses from "../components/Buses/Buses";

function Stop() {
  const { key } = useParams();
  const serverUrl = "https://winnipegtransitserver.herokuapp.com/schedule/";
  const { data, loading } = useFetch(serverUrl + key);
  return (
    <div className="Buses">
      {!loading ? <Buses data={data} /> : <h3>Loading</h3>}
    </div>
  );
}

export default Stop;
