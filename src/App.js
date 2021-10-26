import "./App.css";
import Developer from "./components/Developer";
function App() {
  const objDeveloper = [
    {
      name: "Gabriel",
      age: 19,
      country: "Brasil",
    },
    {
      name: "Filipe",
      age: 28,
      country: "Brasil",
    },
    {
      name: "Mariana",
      age: 24,
      country: "Itália",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {objDeveloper.map((e) => (
          <div>
            <Developer name={e.name} age={e.age} country={e.country} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
