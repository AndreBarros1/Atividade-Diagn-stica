import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return(
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/listagem">Listagem</Link></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header