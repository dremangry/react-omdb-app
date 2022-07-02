import "./styles/app.scss"
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f1f1f1" d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z" /></svg>
        <h1>OMDB API</h1>
      </div>
      <Title/>
    </div>
  );
}

export default App;
