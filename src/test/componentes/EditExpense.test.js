/*import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../componentes/EditExpensePage';
import expenses from '../fixuters/expenses';

let wrapper,editExpense,removeExpense,history

beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow(
        <EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expenses={expenses[2]}
        />
    )
});

test('render Edit Expenses',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('handle Edit Expenses',()=>{
   // wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    //expect(history.push).toHaveBeenLastCalledWith('/');

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
    //expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});

test('handle remove Expenses',()=>{
    
     wrapper.find('button').simulate('click');
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(removeExpense).toHaveBeenLastCalledWith({
         id:expenses[2].id
     });
     //expect(addExpense).toHaveBeenCalledWith(expenses[1]);
 });
 */
import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../componentes/EditExpensePage';
import expenses from '../fixuters/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});
