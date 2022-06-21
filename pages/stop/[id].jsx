import React from "react";
import { useRouter } from "next/router"
import useFetch from "../../components/Utils/useFetch";
import Buses from "../../components/Buses";
import Loader from "../../components/Utils/Loader";

function Stop() {
  const { id } = useRouter().query;
  const { data, loading } = useFetch(process.env.REACT_APP_SERVER_URL+"schedule/" + id);
  return (
    <div className="Buses">{!loading ? <Buses data={data} /> : <Loader />}</div>
  );
}

export default Stop;