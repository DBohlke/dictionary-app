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
          <small>Coded by Dani Bohlke</small>
        </footer>
      </div>
    </div>
  );
}
