import React from 'react';
import NotFoundPage from '../../componentes/NotFoundPage'
import {shallow} from 'enzyme';
import expenses from '../fixuters/expenses';

test('expenses notFound page',()=>
{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
});