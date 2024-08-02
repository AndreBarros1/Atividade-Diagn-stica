import './Cadastro.css'
import React, { useState } from 'react';
import FormularioAluno from '../../components/FormularioAluno/FormularioAluno';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Cadastro() {
    return (
       <div>
            <Header/>
            <h1>Cadastro de Alunos</h1>
            <FormularioAluno/>
            <Footer/>
        </div>
    )
}

export default Cadastro