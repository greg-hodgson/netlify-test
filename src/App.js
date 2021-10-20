import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.API_KEY}</p>
        <p>Getting Airtable data...</p>
      </header>
    </div>
  );
}

export default App;
