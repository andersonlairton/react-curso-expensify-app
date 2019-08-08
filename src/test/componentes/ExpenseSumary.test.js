import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSumary} from '../../componentes/ExpenseSumary';

test('teste com apenas um item ',()=>
{
    const wrapper = shallow(<ExpensesSumary ExpenseContador={1} ExpenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('teste com varias despesas ',()=>
{
    const wrapper = shallow(<ExpensesSumary ExpenseContador={23} ExpenseTotal={5325729878752} />);
    expect(wrapper).toMatchSnapshot();
});
