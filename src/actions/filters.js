//filtro de texto
export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

//Classificar data

export const sortByDate = () => (
    {
        type: 'SORT_BY_DATE',

    });

//classificando por quantidade
export const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT',

    }
);
//setStartDate

export const setStartDate = (startDate) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
);
//SET END DATE
export const setEndDate = (endDate) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
);