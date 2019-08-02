import expensesReducers from '../../reducers/expenses';
import expenses from '../fixuters/expenses';

test('default set state',()=>
{
    const estado = expensesReducers(undefined,{type:'@@INIT'});
    expect(estado).toEqual([]);
});

test('removendo com o id',()=>
{
    const acao={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const estado = expensesReducers(expenses,acao);
    expect(estado).toEqual([expenses[0],expenses[2]]);
});

test('nao removendo quando nao achar o id',()=>
{
    const acao={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const estado = expensesReducers(expenses,acao);
    expect(estado).toEqual(expenses);
});

test('adicionando ',()=>
{
    const expense=
    {
        id: '4',
    descricao: 'teste',
    note: '',
    amount: 195,
    createdAt: 0
    }
    const action=
    {
        type:'ADD_EXPENSE',
        expense
        
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});
test('edit expense',()=>
{
    const amount=15000;
    const action=
    {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(amount);
});

test('edit expense id nao encontrado',()=>
{
    const amount=15000;
    const action=
    {
        type:'EDIT_EXPENSE',
        id:-1,
        updates:{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});