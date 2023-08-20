import { useState } from "react";

import "./Form.css";

export default function Form({ handleSubmit }) {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    const newWord = e.target.value;
    setWord(() => newWord);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search for similar meanings: </label>
      <input
        type="text"
        id="word"
        name="word"
        value={word}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}
