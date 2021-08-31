import logo from './logo.svg';
import './App.css';
import Developer from './components/Developer';
import Student from './components/Student/Student';
function App() {

  const objStudant = {

    name: "Paulo", 
    age: 25, 
    country: 'USA'

  }
  const objDeveloper ={
    
    name: "Filipe", 
    age: 16, 
    country: "Brasil"
  
  }

  return (
    <div className="App">
      <header className="App-header">
       <Developer name={objDeveloper.name} age={objDeveloper.age} country={objDeveloper.country}/>
       <Student name={objStudant.name} age={objStudant.age} country={objStudant.country}/>
      </header>
    </div>
  );
}

export default App;
