import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImg, setAllMemeImg] = React.useState(memesData);

  function getMeme() {
    const memes = allMemeImg.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    const url = randomMeme.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }
  return (
    <div className="meme-container">
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
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-img" />
        <h2 className="meme-text top">One does not simply</h2>
        <h2 className="meme-text bottom">Walk into Mordor</h2>
      </div>
    </div>
  );
}

export default Meme;
