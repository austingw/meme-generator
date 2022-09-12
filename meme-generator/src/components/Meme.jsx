import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
    console.log(meme);
  }

  return (
    <div className="meme-container">
      <div className="meme-form">
        <input
          type="text"
          id="top-text"
          placeholder="Top Text"
          className="meme-inputs"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          id="bottom-text"
          placeholder="Bottom Text"
          className="meme-inputs"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme-btn" onClick={getMeme}>
          Generate meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
