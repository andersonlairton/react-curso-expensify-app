import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//funçao que adiciona

const addExpense=({descricao='',nota='',amount=0,createAT=0}={})=>(
{
    type:'ADD_EXPENSE',
    expense:
    {
        id:uuid(),
        descricao,
        nota,
        amount,
        createAT
    }
});
//função que remove
const removeExpense=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

//função que edita

const editExpense=()=>(
    {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
);

//filtro de texto
const setTextFilter = (text='')=>(
    {
        type:'SET_TEXT_FILTER',
        text
    }
);

//Classificar data

const sortByDate=()=>(
    {
      type:'SORT_BY_DATE',

    });

//classificando por quantidade
const sortByAmount=()=>(
    {
      type:'SORT_BY_AMOUNT',

    }
);
//setStartDate

const setStartDate=(startDate)=>(
    {
        type:'SET_START_DATE',
        startDate
    }
);
//SET END DATE
const setEndDate=(endDate)=>(
    {
        type:'SET_END_DATE',
        endDate
    }
);


const expenseReducerDefaultState=[];

const expenseReducer=(state =expenseReducerDefaultState,action)=>
{
    switch (action.type) 
    {
        case 'ADD_EXPENSE':
            return[...state,action.expense];//retorne os dados da matriz
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !==action.id);//se o id for igual ao action.id resultara em falso
        case 'EDIT_EXPENSE':
            return stete.map((expense)=>
            {
                if(expense.id===action.id)
                {
                    return{
                        ...expense,
                        ...action.updates
                    }
                }
                else
                {
                    return expense;
                }
            });
        default:
            return state;
    }
};
//criando filtros
const filterReducerDefault=
{
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filterReducer =(state=filterReducerDefault,action)=>
{
    switch (action.type) 
    {
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
            case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
            case 'SET_START_DATE':
                return{
                    ...state,
                    startDate:action.startDate
                }
            case 'SET_END_DATE':
                return{
                    ...state,
                    endDate:action.endDate
                }
        default:
            return state;
    }

};
//classificando dados
const getVisibleExpenses = (expenses,/*criando variaveis e filtros individuais */{text,sortBy,startDate,endDate})=>
{
    return expenses.filter((expense)=>
    {
        const startDateMatch= typeof startDate !=='number' || expense.createAT>=startDate;
        const endDateMatch= typeof endDate !=='number'|| expense.createAT<=endDate;
        const textMatch=expense.descricao.toLowerCase().includes(text.toLowerCase());//pesquisando dados e convertendo eles para letras maiusculas

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>//classificando 
    {
        if(sortBy==='date')
        {
            return a.createAT<b.createAT?1:-1;
        }else if(sortBy==='amount')//classificando as despesas por valores
        {
            return a.amount<b.amount?1:-1;
        }
    });
}

//crindo store
const store = createStore(
    combineReducers(//combinando varios reduces
        {
            expenses:expenseReducer,
            filters:filterReducer
        })
);


store.subscribe(()=>
{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});
const expenseOne=store.dispatch(addExpense({descricao:'Aluguel',amount:100,createAT:-21000}));
const expenseTwo=store.dispatch(addExpense({descricao:'agua',amount:120,createAT:-1000}));
/*
store.dispatch(removeExpense({id:expenseOne.expense.id}));
store.dispatch(removeExpense(expenseTwo.expense.id,{amount:500}));


store.dispatch(sortByAmount());
store.dispatch(sortByDate());
*/

store.dispatch(setTextFilter('el'));//filtrando  o texto
/*
store.dispatch(setStartDate(2000));
 
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
*/
const demoState=()=>
(
    {
        expenses:
        [
            {
                id:'fjskdjfslkfjskldjfsl',
                descricao:'aluguel de janeiro',
                nota:'este é o aluguel de janeiro',
                amount:54500,
                createAT:0

            }
        ],
        filtros:
        [
            {
                text:'aluguel',
                sortBy:'amount',
                startDate:undefined,
                endDate:undefined
            }
        ]
    }
);

