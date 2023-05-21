import { useEffect, useState } from "react";
import Axios from "axios";

const useFetch = function (url) {
  const [state, setState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(url);
      setState(data);
    };

    fetchData();
  }, []);

  return {
    state,
  };
};

export default useFetch;
