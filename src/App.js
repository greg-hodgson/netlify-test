import './App.css';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.REACT_APP_API_KEY}</p>
        <p>Getting Airtable data...</p>
      </header>
    </div>
  );
}

export default App;
