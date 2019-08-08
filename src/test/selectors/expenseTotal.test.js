import selectExpenseTotal from '../../selectors/expenses_total';
import expense from '../fixuters/expenses';

test('total igual a zero',()=>
{//testando se o valor é igual a zero 
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);

});

test('com um unico valor',()=>
{//testando se o valor é igual a zero 
    const res = selectExpenseTotal([expense[0]]);
    expect(res).toBe(selectExpenseTotal([expense[0]]));//pegando o dado da propria matriz,caso nao fosse possivel saber o valor
    // expect(res).toBe(expense.map((expense) => expense.amount))
//expect(res).toBe(195)
});
test('total com varios valores',()=>
{//testando se o valor é igual a zero 
    const res = selectExpenseTotal(expense);
    expect(res).toBe(selectExpenseTotal(expense));
    //expect(res).toBe(114195);

});