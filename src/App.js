import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar";
import DemoProps from "./components/props";
import DemoState from "./components/state";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar />
        <DemoProps ten={"Nguyen Thi Dinh"}  tuoi={56}/>

        <DemoState/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
