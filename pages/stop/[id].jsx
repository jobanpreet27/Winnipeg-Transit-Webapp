import React from "react";
import { useRouter } from "next/router"
import useFetch from "../../components/Utils/useFetch";
import Buses from "../../components/Buses/Buses";
import Loader from "../../components/Utils/Loader";

function Stop() {
  const { id } = useRouter().query;
  const serverUrl = "https://winnipegtransitserver.herokuapp.com/schedule/";
  const { data, loading } = useFetch(serverUrl + id);
  return (
    <div className="Buses">{!loading ? <Buses data={data} /> : <Loader />}</div>
  );
}

export default Stop;