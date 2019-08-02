import filterReducer from '../../reducers/filters';
import moment from 'moment';


test('valores dos filtros',()=>
{
    const state= filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual(
        {
            text:'',
            sortBy:'date',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')

        });

});

test('amount',()=>
{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('sort by date',()=>
{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'

    }
    const action={type:'SORT_BY_DATE'};
    const state=filterReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});
test('setText filter',()=>
{
    const text='este é nosso filtro';
    const action=
    {
        type:'SET_TEXT_FILTER',
        text
    }
    const state=filterReducer(undefined,action);
    expect(state.text).toBe(text);
});

test('sort startdate',()=>
{
    const startDate=moment();
    const action=
    {
        type:'SET_START_DATE',
        startDate
    }
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(startDate)
});/*
test('sort enddate',()=>
{
    const enddate=moment();
    const action= {
        type:'SET_END_DATE',
        enddate
    };
    const state=filterReducer(undefined,action);
    expect(state.enddate).toEqual(enddate);
});
*/
test('should set endDate filter', () => {
    const endDate = moment();
    const action = {
      type: 'SET_END_DATE',
      endDate
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
  });