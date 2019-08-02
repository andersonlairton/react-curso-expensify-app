import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

const Cabecalho=()=>
(
    <div>
        <h1>Exepensivo App</h1>
        <NavLink to="/" activeClassName="is-active"/* chamando elementos da classe */ exact={true}>Home</NavLink>
        <NavLink to="/help" activeClassName="is-active">Ajuda</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Editar</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
    </div>
);

export default Cabecalho;