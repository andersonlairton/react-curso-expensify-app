const expenseReducerDefaultState=[];

export default (state =expenseReducerDefaultState,action)=>
{
    switch (action.type) 
    {
        case 'ADD_EXPENSE':
            return[...state,
                action.expense
            ];//retorne os dados da matriz
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !==action.id);//se o id for igual ao action.id resultara em falso
        case 'EDIT_EXPENSE':
            return state.map((expense)=>
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

