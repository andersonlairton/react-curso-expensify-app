import {createStore}from 'redux';

//actions generator=sao funções que retornanm ações ao objeto

/*const incrementCount=(payload={}/*definindo um parametro que pode passar na função )=>
(
    {
        type:'INCREMENT',
        incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1//se o valor do parametro payload for igual a um numero,use-o,caso nao seja utilizar o valor 1 como valor base
    }
);//criando a função 
*/
const incrementCount=({incrementBy=1}={}/*acessando o objeto diretamente */)=>
(
    {
        type:'INCREMENT',
        incrementBy//referenciando objeto
    }
);
const decrementCount=({decrementBy=1}={})=>
(
    {
        type:'DECREMENT',
        decrementBy
    }
);

const setCount=({count})=>
(
    {
        type:'SET',
        count
    }
);
const resetCount=()=>
(
    {
         type:'RESET'
    }
);

//reducers é onde a mudança de estado no objeto acontece,sao funções puras,interagem apenas no seu escopo

const countReducer = (state={count :0},action)=>
{
    //console.log('rodando');
    switch(action.type)
    {
        case 'INCREMENT':
          //  const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
                return{
                    count:state.count+action.incrementBy
                };
        case 'DECREMENT':
           // const decrementBy = typeof action.decrementBy =='number'?action.decrementBy:1;
                return{count:state.count-action.decrementBy
                };
        case 'SET':
            return{
                count:action.count
            }
        case 'RESET':
            return{
                count:0
            };
                default:
                    return state;
    }
};

const store = createStore(countReducer)/* tambem pode ser feito com if
    if(action.type === 'INCREMENT')
    {
        
        return{
            count:state.count+1
        }
    }
    else
    {
 
        return state; 
    }  
});
*/

//salvando dados do estado

store.subscribe(()=>//salvando assinatura de estado
    {
    console.log(store.getState());
    }

);
/*
const unsubscribe = store.subscribe(()=>//cancelando assinatura de estado
{
console.log(store.getState());
}

);
//unsubscribe();//so funcina se o subscribe nao estiver implementado.todo o resto do codigo apos e ignorado
*/
//acoes com o o dado da store
/*
store.dispatch
(
    {
        type:'INCREMENT',
        incrementBy:5
    }
);

*/

store.dispatch(incrementCount({incrementBy:5/*colocando um valor no parametro 'incrementby' */}));//chamando a função
store.dispatch(incrementCount());



store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({count:101}));
/*
store.dispatch
(
    {
        type:'SET',
        count:101
    }
);
*/
//console.log(store.getState());
