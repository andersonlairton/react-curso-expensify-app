//importando modulos

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//importando configurações de loja

import configureStore from './store/configureStore';
//importando funções para adicionar 
import { addExpense } from './actions/expenses';
//importando filtro de texto
import { setTextFilter } from './actions/filters';
//imporatndo vizualizações
import getVisibleExpenses from './selectors/expenses';
//trabalahndo com router,qe mapeia as paginas no aplicativo
import Approuter from './routers/AppRouters';
//importando estilos
import 'normalize.css/normalize.css';
import './styles/styless.scss';

import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

//adicionando despensa
store.dispatch(addExpense({ descricao: 'conta de agua' ,amount:15001 }))//descrição do que esta sendo adicionado ,varivel descrição esta declarada no arquivo que adiciona
store.dispatch(addExpense({ descricao: 'conta de luz',createAT:1000 }));
store.dispatch(addExpense({ descricao: 'aluguel' ,amount:10951 }));

//chamando a função de filtrar o texto 
/*
store.dispatch(setTextFilter('conta'));
//chamada de tempo real ,para poder passar dois argumentos
setTimeout(()=>{store.dispatch(setTextFilter('luz'));},3000);//muda depois de 3 segundos,ideal para buscas no banco de dados,pq nao precisa atualizar toda a pagina
*/
//filtrando o que se deseja apresentar
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(VisibleExpenses);
const jsx =
    (
        <Provider store={store}/*com o provider os elementos tem acesso a loja , 'store' é a loja e o {store} é a variavel que a referencia */>
            <Approuter />
        </Provider>

    );

ReactDOM.render(jsx, document.getElementById('app'));
