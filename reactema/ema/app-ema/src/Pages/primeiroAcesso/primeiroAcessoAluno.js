import React from 'react';
import '../../Styles/primeiroAcesso.css'
import {Link} from 'react-router-dom'

function primeiroAcessoAluno (){
    return(
        <div className="container">

            <div className="contente">

                <div className="PrimeiraLinhaTitulo">
                    <h1 className="title-primary text"> PRIMEIRO ACESSO </h1>
                </div>

                <div className="forms">

                    <form  className="camps" method="post" action="">
                        <input className="matriculaAcesso text" type="text" placeholder="Matrícula"/>
                        <input className="senhaAcesso text" type="password" placeholder="Password"/>
                        <input className="emailAcesso text" type="email" placeholder="Email"/>
                        <input className="cod-turmaAcesso text" type="text" placeholder="Código da turma"/>    
                    </form>
                        
                    <a href="#">
                        <button className="btn title-btn text">
                            Entrar
                        </button> 
                    </a>

                    <div className="secondLine text">
                        <Link to="/aluno" style={{textDecoration:"none", color: "#000"}}>Já é cadastrado? faça login</Link>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default primeiroAcessoAluno;