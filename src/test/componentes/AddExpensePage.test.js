import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../componentes/AddExpenseDashboardpage';
import expenses from '../fixuters/expenses';

let addExpense, history, wrapper //definindo variaveis

beforeEach(() => {
    //incrementando suas funçõe e dados
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);

});

test('addexpense page 2', () => {

    expect(wrapper).toMatchSnapshot();
});

test('onSubmit', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});