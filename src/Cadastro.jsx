import react from "react";
import './cadastro.css';

export default function Cadastro(){
    return(
        <div className='conteudo'>
            <h1 className='titulo'>Cadastro</h1>
            <p className='paragrafo'>Preencha os dados abaixo para começar </p>
            <form action="">
                <input type="text" placeholder='Nome' id='nome' name='nome' maxLength='15' />
                <br />
                <input type="text" placeholder='Sobrenome' id='sobrenome' name='sobrenome' maxLength='15' />
                <br />
                <input type='email' placeholder='E-mail' id='email' name='email' maxLength='30'/>
                <br />
                <input type='password' placeholder='Senha' id='senha' name='senha' maxLength='6'/>
                <br />
                <button>Concluir cadastro</button>
            </form>
        </div>
    )
} 