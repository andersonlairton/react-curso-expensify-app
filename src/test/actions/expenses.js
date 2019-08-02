import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//criando gerador de teste 

test('setup removeExpense', () => {
    const acao = removeExpense({ id: '123abc' });
    expect(acao).toEqual(//usa-se toEqual quando ha mais de um parametro 
        {
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
});

test('setup editExpense', () => {
    const acao = editExpense('123abc', { note: 'novo valor de nota' });
    expect(acao).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates: {

                note: 'novo valor de nota'
            }
        });
});

test('addExpense',()=>
{
    const ExpenseData=
    {
        descricao:'aluguel',
        amount:100095,
        createAt:1000,
        note:'este é um aluguel passado'
    }
const action = addExpense(ExpenseData);
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        ...ExpenseData,
        id:expect.any(String)
    }
})
});
test('addExpenseVazio',()=>
{
  
const action = addExpense();
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    
        id:expect.any(String),
        descricao:'',
        nota:'',
        amount:0,
        createAt:0
    }
})
});
