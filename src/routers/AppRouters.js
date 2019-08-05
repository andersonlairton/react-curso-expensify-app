import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

//importando componentes

import Cabecalho from './../componentes/Cabecalho';
import ExpenseDashboardpage from './../componentes/ExpenseDashboardpage';
import AddExpenseDashboardpage from './../componentes/AddExpenseDashboardpage';
import HelpPage from './../componentes/HelpPage';
import NotFoundPage from './../componentes/NotFoundPage';
import EditExpensePage from './../componentes/EditExpensePage';


const AppRouter= ()=>
(
    <BrowserRouter>
    <div>
    <Cabecalho/>
    <Switch /*filtra as rotas,vendo se existe ou nao o caminho buscado*/>
        <Route path="/" component={ExpenseDashboardpage} exact={true}//so apresenta se o caminho da rota foi igual
        />
        <Route path="/create" component={AddExpenseDashboardpage}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;