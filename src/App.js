import logo from './logo.svg';
import './App.css';
import DataViewer from "./components/DataViewer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>React - Spring 연동 예제</h1>
          <DataViewer/>
        </div>
      </header>
    </div>
  );
}

export default App;
