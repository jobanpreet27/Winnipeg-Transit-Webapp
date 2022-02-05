import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/Utils/useFetch";
import Buses from "../components/Buses/Buses";
import Loader from "../components/Utils/Loader";

function Stop() {
  const { key } = useParams();
  const serverUrl = "https://winnipegtransitserver.herokuapp.com/schedule/";
  const { data, loading } = useFetch(serverUrl + key);
  return (
    <div className="Buses">{!loading ? <Buses data={data} /> : <Loader />}</div>
  );
}

export default Stop;
