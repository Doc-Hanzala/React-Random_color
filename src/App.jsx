import Title from "./components/Title";

function App() {
  const handleClick = (e) => {
    let body = document.querySelector("body");
    let currentBtn = e.target;
    body.style.background = randColor();
    currentBtn.style.background = randColor();
  };

  function randColor() {
    let letters = "ABCDEF0123456789";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <section>
      <Title title={"Randomize Color"} />
      <div className="btn-container">
        <button onClick={handleClick} className="btn green">
          click me
        </button>
        <button onClick={handleClick} className="btn red ">
          click me 2
        </button>
        <button onClick={handleClick} className="btn orange">
          click me 3
        </button>
        <button onClick={handleClick} className="btn black ">
          click me 4
        </button>
      </div>
    </section>
  );
}

export default App;
