import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [dataApps, setDataApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("./appData.json")
      .then((data) => setDataApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { dataApps, loading, error };
};
export default useApps;
