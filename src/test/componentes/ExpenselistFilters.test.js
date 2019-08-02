import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../componentes/ExpenseListFilter';
import expenses from '../fixuters/expenses';
import {filters,altFilters} from'../fixuters/filters';
import moment from 'moment'; 

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>
{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper=shallow(
        <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
});

test('expense list filters correct',()=>
{
    expect(wrapper).toMatchSnapshot();
});

test('expense list filters widt alt data correct',()=>
{
    wrapper.setProps(
        {
            filters:altFilters
        });
    expect(wrapper).toMatchSnapshot();
});

test('handle text Change',()=>//simulando entrada de texto
{
    const value='bills'
    wrapper.find('input').simulate('change',{
        //definindo valores
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);//esperamos que a variavel setfilterTexte seja igual ao valor
});

test('simlando classificando a data',()=>
{
    const value='date'
    wrapper.setProps(
        {
            filters:altFilters
        });
        wrapper.find('select').simulate('change',
        {
            target:{value}
        });
        expect(sortByDate).toHaveBeenLastCalledWith();

});

test('sort by amount',()=>
{
    const value='amount'
        wrapper.find('select').simulate('change',
        {
            target:{value}
        });
        expect(sortByAmount).toHaveBeenCalled();
});


test('teste com mudança de estado',()=>
{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);


});


test('calendario focado',()=>
{
    const calendariofocado = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendariofocado);
    expect(wrapper.state('calendarFocused')).toBe(calendariofocado)
});

