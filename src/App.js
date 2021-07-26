import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="lion" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Dani Bohlke and is{" "}
            <a
              href="https://github.com/DBohlke/react-weather-app-new"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://friendly-feynman-0e5d15.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
