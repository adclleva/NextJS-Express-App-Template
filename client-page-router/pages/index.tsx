import React, { useEffect, useState } from "react";

function Index() {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/home");
        const data = await response.json();
        console.log({ data });

        setMessage(data.message);
        setPeople(data.people);
      } catch (error) {
        console.log(error);
        setMessage("Error");
        setPeople([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person}</h2>
        </div>
      ))}
    </div>
  );
}

export default Index;
