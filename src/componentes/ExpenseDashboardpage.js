import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
const ExpenseDashboardpage=()=>(
    <div>
        este é meu componente dashboard
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);
export default ExpenseDashboardpage