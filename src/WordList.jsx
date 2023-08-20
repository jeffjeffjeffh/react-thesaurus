import "./WordList.css";

export default function WordList({ words }) {
  return (
    <div className="listContainer">
      <ul>
        {words.map((word, i) => (
          <li key={i}>{word.word}</li>
        ))}
      </ul>
    </div>
  );
}
