import { useState } from "react";

const Alphabet = () => {
  const [alphabets, setAlphabets] = useState([
    { id: 1, alpha: "k" },
    { id: 2, alpha: "d" },
    { id: 3, alpha: "t" },
    { id: 4, alpha: "3" },
    { id: 5, alpha: "r" },
    { id: 6, alpha: "d" },
  ]);

  const [inputAlpha, setInputAlpha] = useState("");
  const [nextId, setNextId] = useState(7); // 새로운 항목 추가를 위한 id 값

  const addAlpha = (e) => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: nextId,
      alpha: inputAlpha,
    });
    setNextId(nextId + 1); // 다음 항목 id를 위해 1 증가
    setAlphabets(newAlpha);
    setInputAlpha("");
  };

  const deleteAlpha = (id) => {
    // console.log(">>>>", id);
    const result = alphabets.filter((a) => a.id !== id);
    setAlphabets(result);
  };

  return (
    <div>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ul>
        {alphabets.map((a) => {
          return (
            <li
              key={a.id}
              onDoubleClick={() => {
                deleteAlpha(a.id);
              }}
            >
              {a.alpha}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alphabet;
