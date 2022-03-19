import "./App.css";

// fetch all 807 pokemon with a button from https://pokeapi.co

function App() {
  const onClickHandler = () => {
    console.log("clicked eric");
  };

  return (
    <div className="App">
      <h1>test eric</h1>
      <button className="btn btn-primary mx-4" onClick={onClickHandler}>
        Fetch Pokemon
      </button>
    </div>
  );
}

export default App;
