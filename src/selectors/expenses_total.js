export default (expenses) => {
    if (expenses.length === 0) {//verificando se ha dados na matriz
        return 0;
    }
    else {//se tiver mais numeros
        return expenses
            .map((expense) => expense.amount)//mapeando a matriz e pegando apenas o valor do amount
            .reduce((soma, valor) => soma + valor, 0);//somando
    }
};



