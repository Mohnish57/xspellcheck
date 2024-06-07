import { React, useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheck() {
  const [data, setData] = useState({ inputText: "", suggestedText: "" });

  const handleChange = (e) => {
    let text = e.target.value;
    setData({ inputText: text });
    let words = text.split(" ");

    let correctedWords = words.map((word) => {
      let correctedword = customDictionary[word.toLowerCase()];
      return correctedword || word;
    });
    let firstCorrection = correctedWords.find((word, index) => {
      return word !== words[index];
    });
    setData({ suggestedText: firstCorrection || "" });
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows="10"
        spellCheck="true"
        onChange={handleChange}
        value={data.inputText}
      ></textarea>
      {data.suggestedText ? <p>Do you mean: {data.suggestedText}?</p> : null}
    </div>
  );
}

export default SpellCheck;
