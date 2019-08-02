import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../componentes/ExpenseForm';
import expenses from '../fixuters/expenses';
import moment from 'moment';

test('Expense form correto', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Expense form com dados correto', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);//quando se tem que passar dados sempre se usa a matriz
    expect(wrapper).toMatchSnapshot();
});

test('testando erro no envio,', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {//procure form e simule o evento submit
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('imput descricao', () => {
    const value = 'nova descrição';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('descricao')).toBe(value);
});

test('imput nota', () => {
    const value = 'nova nota';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {//find(tipo de envio,se é input ou textArea)
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('amount valor valido', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {//at(numero da entrada 'sequencia do codigo")
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('amount valor invalido', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {//at(numero da entrada 'sequencia do codigo")
        target: { value }
    });

    expect(wrapper.state('amount')).toBe('');
});

//teste com espiao
/*
test('onsubmit prop com valor valido', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onsubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createAt: expenses[0].createdAt
    });
});
*/
  test('should call onSubmit prop for valid form submission 3', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      descricao: expenses[0].descricao,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createAt: expenses[0].createdAt
    });
  });

test('date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment()
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
});

test('calendario focdo',()=>
{
    const focused=true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
})
