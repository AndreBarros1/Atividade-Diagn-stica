import './App.css';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Listagem from './pages/Listagem/Listagem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
  </Router>
  );
}

export default App;
