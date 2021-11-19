import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1 className="m-auto p-3 " >User List</h1>
      </header>
      <PersonList/>
      
    </div>
  );
}

export default App;
