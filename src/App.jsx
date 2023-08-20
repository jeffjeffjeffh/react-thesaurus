import { useState } from "react";

import Form from "./Form";
import WordList from "./WordList";

import "./App.css";

function App() {
  const BASE_URL = "https://api.datamuse.com/words?ml=";
  const [words, setWords] = useState([]);

  const getWords = async (e) => {
    e.preventDefault();
    const word = e.target.word.value;
    const response = await fetch(`${BASE_URL}${word}`);
    const wordsFromApi = await response.json();
    setWords(wordsFromApi);
  };

  return (
    <main>
      <Form handleSubmit={getWords} />
      <WordList words={words} />
    </main>
  );
}

export default App;
