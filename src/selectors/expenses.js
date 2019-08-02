/*import moment from 'moment';
//classificando dados
export default (expenses,/*criando variaveis e filtros individuais { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createATMoment = moment(expense.createAT);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createATMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createATMoment, 'day') : true;
        // const startDateMatch= typeof startDate !=='number' || expense.createAT>=startDate;
        //const endDateMatch= typeof endDate !=='number'|| expense.createAT<=endDate;
        const textMatch = expense.descricao.toLowerCase().includes(text.toLowerCase());//pesquisando dados e convertendo eles para letras maiusculas

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>//classificando 
    {
        if (sortBy === 'date') {
            return a.createAT < b.createAT ? 1 : -1;
        } else if (sortBy === 'amount')//classificando as despesas por valores
        {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}
*/
import moment from 'moment';

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.descricao.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
