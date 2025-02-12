import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Weather />
        <footer>
          Project coded by{" "}
          <a
            href="https://lj-fryer.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            LJ Fryer
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/LJ-Fryer/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
