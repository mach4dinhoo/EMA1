import React from 'react';
import '../../Styles/professor.css'
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
                 <a className="passwordRecuperar text" href="#">Esqueci a senha ou matrícula</a>
                </form>

                <a href="#">
                    <button className="btn title-btn text">
                        Entrar
                    </button> 
                </a>

            </div>
           

            <div className="third-line text">
            <Link  to="/primeiroAcesso/primeiroAcessoProfessor" style={{ textDecoration:"none", color: "#000000"}}>  PRIMEIRO ACESSO</Link>
            </div>
       </div>

    </div>
    );
}

export default index;