import uuid from 'uuid';

export const addExpense = (
    {
         descricao = '',
          nota = '', 
          amount = 0, 
          createAT = 0
         } = {}) => (
    {
        type: 'ADD_EXPENSE',
        expense:
        {
            id: uuid(),
            descricao,
            nota,
            amount,
            createAT
        }
    });
//função que remove
export const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

//função que edita

export const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);