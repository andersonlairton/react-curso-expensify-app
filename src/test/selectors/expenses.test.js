import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixuters/expenses';

test('teste expenses',()=>
{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('filtro de data inicial',()=>
{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);

    

});
test('data final',()=>

{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);

});
test('sort by date',()=>
{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});
test('sort by amount',()=>
{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});
