import React from 'react';
import '../../Styles/aluno.css'
import {Link} from 'react-router-dom'

function index (){
    return(
        <div className="container"> 

        <div className="caixa">

            <div className="first-line-title">
                <h2 className=" title-primary text">Fazer login</h2>
            </div>
            
            <div className="second-line">

                <form className="form">
                 <input className="matricula text" type="text" placeholder="Matrícula"/>
                 <input className="senha text" type="password" placeholder="Password"/>  
                 <a className="passwordRecuperar rec text" href="#">Esqueci a senha ou matrícula</a>
                </form>

                <a href="#">
                    <button className="btn title-btn text">
                        Entrar
                    </button> 
                </a>

            </div>
           
            <ul>
                <li className="third-line text">
                    <Link  to="/primeiroAcesso/primeiroAcessoAluno" style={{ textDecoration:"none", color: "#000000"}}>  PRIMEIRO ACESSO</Link>
                </li>
            </ul>
       </div>

    </div>
    );
}

export default index;