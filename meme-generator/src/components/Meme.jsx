import React from "react";
import memesData from "../memesData";

function Meme() {
  const [memeUrl, setMeme] = React.useState("");

  function getMeme() {
    const memes = memesData.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMeme(randomMeme.url);
  }
  return (
    <div className="meme-form">
      <input
        type="text"
        id="top-text"
        placeholder="Top Text"
        className="meme-inputs"
      />
      <input
        type="text"
        id="bottom-text"
        placeholder="Bottom Text"
        className="meme-inputs"
      />
      <button className="meme-btn" onClick={getMeme}>
        Generate meme image 🖼️
      </button>
      <img src={memeUrl}></img>
    </div>
  );
}

export default Meme;
