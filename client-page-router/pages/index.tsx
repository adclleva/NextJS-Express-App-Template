import React, { useEffect, useState } from "react";

function Index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/home");
        const data = await response.json();
        console.log({ data });

        setMessage(data.message);
      } catch (error) {
        console.log(error);
        setMessage("Error");
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default Index;
