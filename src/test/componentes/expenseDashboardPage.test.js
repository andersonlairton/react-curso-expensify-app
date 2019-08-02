import React from 'react';
import expense from '../fixuters/expenses';
import {shallow} from 'enzyme';
import expenseDashboadPage from '../../componentes/ExpenseDashboardpage';

test('expenses dashboardpage',()=>
{
    const wrapper = shallow(<expenseDashboadPage/>);
    expect(wrapper).toMatchSnapshot();
});