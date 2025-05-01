import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  //check status

  useEffect(() => {
    window.addEventListener("online", (e) => {
      console.log("online");
      setStatus(true);
    });

    window.addEventListener("offline", (e) => {
      console.log("offline");
      setStatus(false);
    });
  }, []);
  
  return status;
};

export default useOnlineStatus;
