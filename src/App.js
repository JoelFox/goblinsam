import logo from "./goblin-sam-transparent.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>:goblin-sam:</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <label for="newsletter">Register to our newsletter</label>
        <input type="text" placeholder="Your e-mail"></input>
        <input type="submit" value="Submit"/>
      </header>
    </div>
  );
}

export default App;
