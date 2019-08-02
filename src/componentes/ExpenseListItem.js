//listando dados da matriz
import React from 'react';
import {connect}from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch,id,descricao,amount,createAt})=>
(
   
    <div>
    
    <Link to={`/edit/${id}`} /*criando uma pagina de edição*/>
    <h3>{descricao}</h3>
    </Link>
        
        <p>-{amount}-{createAt}</p>
        
    </div>
);

export default ExpenseListItem;

