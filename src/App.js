import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Weather defaultCity="Sydney" />
        <footer>
          Coded by{" "}
          <a
            href="https://lj-fryer.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            LJ Fryer
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/LJ-Fryer/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ljf-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
