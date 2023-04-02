import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setJoke(res.data.setup + " " + res.data.punchline);
      });
  };
  return (
    <div>
      <h1>Random Joke Generator</h1>
      <button onClick={getJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Test;
