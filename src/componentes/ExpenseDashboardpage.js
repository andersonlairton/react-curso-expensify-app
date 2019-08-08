import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSumary from './ExpenseSumary';

const ExpenseDashboardpage=()=>(
    <div>
        este é meu componente dashboard
        <ExpenseSumary/>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);
export default ExpenseDashboardpage