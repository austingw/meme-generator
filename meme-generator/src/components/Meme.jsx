function Meme() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <form className="meme-form" onSubmit={handleSubmit}>
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
      <button type="submit">Generate meme image!</button>
    </form>
  );
}

export default Meme;
