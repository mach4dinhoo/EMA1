import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './Pages/Main'
import aluno from './Pages/aluno'
import Professor from './Pages/professor'
import primeiroAcessoAluno from './Pages/primeiroAcesso/primeiroAcessoAluno';
import primeiroAcessoProfessor from './Pages/primeiroAcesso/primeiroAcessoProfessor';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/aluno" component={aluno} />
                <Route path="/professor" component={Professor} />
                <Route path="/primeiroAcesso/primeiroAcessoAluno" component={primeiroAcessoAluno} />
                <Route path="/primeiroAcesso/primeiroAcessoProfessor" component={primeiroAcessoProfessor} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes