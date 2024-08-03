import './Cadastro.css'
import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Cadastro() {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoAluno = { nome, idade, email };
        setAlunos([...alunos, novoAluno]);
        setNome('');
        setIdade('');
        setEmail('');
    }

    return (
        <div>
            <Header/>
            <div className="cadastro-container">
                <h1>Cadastro de Alunos</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                    </div>
                    <div>
                    <label>Idade:</label>
                    <input 
                        type="number" 
                        value={idade} 
                        onChange={(e) => setIdade(e.target.value)} 
                        required 
                    />
                    </div>
                    <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                <div className="lista-alunos">
                    <h2>Lista de Alunos</h2>
                    <ul>
                    {alunos.map((aluno, index) => (
                        <li key={index}>
                        {aluno.nome}, {aluno.idade} anos, {aluno.email}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <Footer/>
    </div>
    )
}

export default Cadastro