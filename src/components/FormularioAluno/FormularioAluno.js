import './FormularioAluno.css'

function FormularioAluno() {
    return(
        <form>
            <input type='text' name='nome' placeholder='Nome' required></input>
            <input type='text' name='idade' placeholder='Idade' required></input>
            <input type='email' name='email' placeholder='E-mail' required></input>
        </form>
    )
}

export default FormularioAluno