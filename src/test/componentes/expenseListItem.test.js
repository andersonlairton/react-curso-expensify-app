import React from 'react';
import ExpenseListItem from '../../componentes/ExpenseListItem'
import {shallow} from 'enzyme';
import expenses from '../fixuters/expenses';

test('expenses list item',()=>
{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});