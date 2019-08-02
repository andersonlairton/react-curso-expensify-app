import React from 'react';
import { ExpenseList } from '../../componentes/ExpenseList';
import { shallow } from 'enzyme';
import expenses from '../fixuters/expenses';

test('expense list expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('array vazio list expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});