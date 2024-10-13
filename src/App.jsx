import screen_shot from "./assets/screen-shot.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="lead">
        <header>
          <div className="infoContainer">
            <h1>Shemuel Castro</h1>
            <h2>Front & backend developer in Texas!</h2>
            <h3>Get in touch...</h3>
          </div>
          <h3 className="email">shemuelcastro33@gmail.com</h3>
        </header>
        <div className="projectsContainer">
          <img src={screen_shot} className="screenShot" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
