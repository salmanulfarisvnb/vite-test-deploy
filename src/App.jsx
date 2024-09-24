import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => setData(data.splice(1, 10)))
    .catch(() => {
      console.log("error");
    });

  return (
    <div>
      {data.map((data, key) => (
        <div key={key}>
          <h1>{data.title}</h1>
          <img src={data.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default App;
