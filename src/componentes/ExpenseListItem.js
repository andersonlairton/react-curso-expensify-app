//listando dados da matriz
import React from 'react';
import {connect}from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({dispatch,id,descricao,amount,createAt})=>
(
   
    <div>
    
    <Link to={`/edit/${id}`} /*criando uma pagina de edição*/>
    <h3>{descricao}</h3>
    </Link>
        
        <p>-{numeral(amount/100).format('$0,0.00')}
        -
        {moment(createAt).format('Do / MMMM / YYYY')}</p>
        
    </div>
);

export default ExpenseListItem;

