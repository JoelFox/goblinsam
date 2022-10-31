import standardLogo from "./goblin-sam-transparent.png";
import goblinModeLogo from "./goblin-sam-anime.gif";
import "./App.css";
import Countdown from 'react-countdown';
import { useState } from 'react';

function App() {
  
  const d = new Date();
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0, 0);
  // const date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() + 10);

  const [logo, setLogo] = useState(standardLogo);
  const [goblinMode, setGoblinMode] = useState("");

  const onGoblinMode = () => {
    setLogo(goblinModeLogo);
    setGoblinMode("GOBLIN-MODE")
  }

  return (
    <div className="App">
      <header className={`App-header ${goblinMode}`}>
        <h1>:goblin-sam:</h1>

        <img src={logo} className="App-logo" alt="logo" />
        {date && <><h4>GOBLIN MODE: <Countdown date={ date } onComplete={onGoblinMode} /></h4></> }
        <label htmlFor="newsletter">Register to our newsletter</label>
        <input type="text" placeholder="Your e-mail"></input>
        <input type="submit" value="Submit"/>
      </header>
    </div>
  );
}

export default App;
