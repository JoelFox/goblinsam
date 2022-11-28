import standardLogo from "./goblin-sam-transparent.png";
import goblinModeLogo from "./goblin-sam-anime.gif";
import "./App.css";
import Countdown from "react-countdown";
import { useState } from "react";
import Snowfall from "react-snowfall";

function App() {
  const d = new Date();
  const date = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getHours() >= 17 ? d.getDate() + 1 : d.getDate(),
    17,
    0,
    0
  );
  // const date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() + 10);

  const [logo, setLogo] = useState(standardLogo);
  const [goblinMode, setGoblinMode] = useState(false);
  const snowflake1 = document.createElement("img");
  snowflake1.src = "./goblin-sam-transparent.png";

  const snowFallImages = [snowflake1];

  const onGoblinMode = () => {
    setLogo(goblinModeLogo);
    setGoblinMode(true);
  };

  return (
    <>

      <div className={`App ${goblinMode ? "goblinModeReverse" : ""}`}>
        <header className={`App-header ${goblinMode ? "GOBLIN-MODE" : ""}`}>
          <h1 className={goblinMode ? "goblinModeFast" : ""}>
            {goblinMode ? "GOBLIN MODE" : ":goblin-sam:"}
          </h1>
          <div>
            {goblinMode && (
              <>
                <img src={logo} className="App-logo-goblin" alt="logo" />
                <img src={logo} className="App-logo-goblin" alt="logo" />
              </>
            )}
            <img src={logo} className="App-logo" alt="logo" />
            {goblinMode && (
              <>
                <img src={logo} className="App-logo-goblin" alt="logo" />
                <img src={logo} className="App-logo-goblin" alt="logo" />
              </>
            )}
          </div>

          {date && (
            <>
              <h4 className={goblinMode ? "goblinMode" : ""}>
                GOBLIN MODE: <Countdown date={date} onComplete={onGoblinMode} />
              </h4>
            </>
          )}
          <label htmlFor="newsletter">Register to our newsletter</label>
          <input type="text" placeholder="Your e-mail"></input>
          <input type="submit" value="Submit" />
        </header>
      </div>
      <Snowfall images={goblinMode ? snowFallImages : []} radius={goblinMode ? [15, 30] : [3,7]} />

    </>
  );
}

export default App;
