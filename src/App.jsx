import messenger_screen_shot from "./assets/screen-shot.png";
import twitter_screeen_shot from "./assets/screen-shot(1).png"
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
          <h1>Projects:</h1>
          <img src={messenger_screen_shot} className="screenShot" alt="" />
          <img src={twitter_screeen_shot} className="screenShot" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
