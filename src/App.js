import logo from './logo.svg';
import './App.css';
import PropDemo from './PropDemo';

function App() {
  const msg = "Welcome";
  const name = "Rahul";
  return (
    <div className="App">
      <PropDemo title={msg} name={name}></PropDemo>
    </div>
  );
}

export default App;
