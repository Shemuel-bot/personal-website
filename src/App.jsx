import messenger_screen_shot from "./assets/screen-shot.png";
import twitter_screeen_shot from "./assets/screen-shot(1).png";
import shopping_screen_shot from "./assets/screen-shot (2).png";
import admin_screen_shot from "./assets/screen-shot (3).png";

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
          <a href="mailto:shemuelcastro33@gmail.com">
            <h3 className="email">shemuelcastro33@gmail.com</h3>
          </a>
          <a href="https://github.com/Shemuel-bot" target="blank">
            <h3 className="email">github</h3>
          </a>
          <div className="skillsContainer">
            <h1>Skills</h1>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                className="logo"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                className="logo"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
                className="logo"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
                className="logo"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                alt=""
                className="logo"
              />
              <img
                src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000"
                alt=""
                className="logo"
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                alt=""
                className="logo"
              />
              <img
                src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                alt=""
                className="logo"
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=qc3TyHJPxEoH&format=png&color=000000"
                alt=""
                className="logo"
              />
            </div>
          </div>
        </header>
        <div className="projectsContainer">
            <h1>Some Projects:</h1>
          <a href="https://messaging-app-seven-gilt.vercel.app/" target="blank">
            <img src={messenger_screen_shot} className="screenShot" alt="" />
          </a>
          <a href="https://odin-book-frontend-rho.vercel.app/" target="blank">
            <img src={twitter_screeen_shot} className="screenShot" alt="" />
          </a>
          <a href="https://shopping-cart-ecru-eight.vercel.app/" target="blank">
            <img src={shopping_screen_shot} className="screenShot" alt="" />
          </a>
          <a
            href="https://shemuel-bot.github.io/admin-dashboard/"
            target="blank"
          >
            <img src={admin_screen_shot} className="screenShot" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
