import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses_total';

export const ExpensesSumary = ({ ExpenseContador,expenseCount, ExpenseTotal }) => {
 
    const Despesa = ExpenseContador === 1 ? 'expense' : 'expenses'  ;
    
    const formatoValorTotal = numeral(ExpenseTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Veja o valor total das {ExpenseContador} {Despesa} totais ,com o valor de {formatoValorTotal}</h1>

        </div>
    );
}

//adicionado valores as stores(lojas),para ser acessado por outras paginas

const mapStateToprops = (state) => {
    //configurando seletores
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        ExpenseContador: visibleExpenses.length,
        
       
        ExpenseTotal: selectExpensesTotal(visibleExpenses)
    };
};
//exportando tudo 
export default connect(mapStateToprops)(ExpensesSumary);