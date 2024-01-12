import './App.css';
import Login from '../src/pages/Login/index'
import Cadastro from './pages/Cadastro';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Login />
      <Cadastro />
    </BrowserRouter>

  );
}

export default App;
