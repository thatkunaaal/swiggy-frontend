import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetchdata

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(MENU_URL + resId);
    const resJsonData = await resData.json();
    setResInfo(resJsonData);
  };

  return resInfo;
};

export default useRestaurantInfo;
