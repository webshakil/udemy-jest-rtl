import logo from './logo.svg';
//import anotherPic from './logo192.png';
import './App.css';
import MyForm from './component/Form';
import Counter from './component/Counter';


function App() {
  return (
    <>
    <Counter/>
   <MyForm/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={anotherPic} className="App-anotherPic" alt="anotherPic" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React app
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
