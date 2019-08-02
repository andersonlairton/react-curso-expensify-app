import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter,sortByDate,sortByAmount } from '../../actions/filters';

test("setStartDate", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test("setEndDate", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual(
        {
            type: 'SET_END_DATE',
            endDate: moment(0)
        });
});

test("set textFilter", () => {
    const text = 'something it';
    const action = setTextFilter(text);
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text
        });
});

test("set with object",()=>
{
    const action=setTextFilter();
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: ''
        });
});

test('sort by date',()=>
{
expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});
test('sortby amount',()=>
{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});