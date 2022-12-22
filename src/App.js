// import standardLogo from "./goblin-sam-transparent.png";
// import goblinModeLogo from "./goblin-sam-anime.gif";
// import luciaLogo from "./goblin-sam-lucia.png";
import santaLogo from "./goblin-sam-santa.png";
import reindeerLogo from "./goblin-sam-reindeer.png";
import audio from "./jingle-bells-8bit.mp3";

import "./App.css";
import Countdown from "react-countdown";
import { useState } from "react";
import Snowfall from "react-snowfall";

function App() {
  const music = new Audio(audio);
  const d = new Date();
  const date = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getHours() >= 17 ? d.getDate() + 1 : d.getDate(),
    15,
    30,
    0
  );
  // const date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() + 10);

  const [logo, setLogo] = useState(santaLogo);
  const [goblinMode, setGoblinMode] = useState(false);
  const snowflake1 = document.createElement("img");
  snowflake1.src = "./goblin-sam-santa.png";

  const snowFallImages = [snowflake1];

  const onGoblinMode = () => {
    // setLogo(goblinModeLogo);
    setGoblinMode(true);
    music.play();
  };


  return (
    <>

      <div className={`App ${goblinMode ? "goblinModeReverse" : ""}`}>
        <header className={`App-header ${goblinMode ? "GOBLIN-MODE" : ""}`}>
          <h1 className={goblinMode ? "goblinModeFast" : ""}>
            {goblinMode ? "SANTA GOBLIN MODE" : ":goblin-sam:"}
          </h1>
          {goblinMode && (
              <>
              <div>
              <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </div>
              <div>
              <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </div>

              </>
            )}
          <div>
            {goblinMode && (
              <>
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </>
            )}
            <img src={logo} className="App-logo" alt="logo" />
            {goblinMode && (
              <>
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </>
            )}
          </div>
          {goblinMode && (
              <>
              <div>
              <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </div>
              <div>
              <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
                <img src={reindeerLogo} className="App-logo-goblin" alt="logo" />
              </div>
              </>
            )}
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
          {goblinMode && <p>Jingle Bells 8Bit" by Tim Beek (timbeek.com)</p>}
        </header>
      </div>
      <Snowfall images={goblinMode ? snowFallImages : []} radius={goblinMode ? [15, 30] : [3,7]} />

    </>
  );
}

export default App;
