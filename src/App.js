import logo from "./goblin-sam-transparent.png";
import "./App.css";
import Countdown from 'react-countdown';

function App() {
  
  const d = new Date();
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>:goblin-sam:</h1>

        <img src={logo} className="App-logo" alt="logo" />
        {date && <><h4>GOBLIN TIME: </h4><Countdown date={ date } /></> }
        <label htmlFor="newsletter">Register to our newsletter</label>
        <input type="text" placeholder="Your e-mail"></input>
        <input type="submit" value="Submit"/>
      </header>
    </div>
  );
}

export default App;
