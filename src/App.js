import logo from './logo.svg';
import './App.css';
import Cadastro from './Cadastro'

function App() {
  return (
    <div className="App">
      <Cadastro />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='react'>
          App React
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
