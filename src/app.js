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
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


//console.log(VisibleExpenses);
const jsx =
    (
        <Provider store={store}/*com o provider os elementos tem acesso a loja , 'store' é a loja e o {store} é a variavel que a referencia */>
            <Approuter />
        </Provider>

    );

ReactDOM.render(jsx, document.getElementById('app'));
