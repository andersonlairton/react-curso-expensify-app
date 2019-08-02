import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) =>
    (
        <div>
            <h1>Componente da pagina ExpenseList</h1>

            {props.expenses.length === 0 ? (
                <p>no expenses</p>
            ) : (


                    //  {<p>filtro:{props.filters.text}</p> }

                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    }
                    )
                    )
            }




        </div>
    );
const mapStateToProps = (state) => {
    return {
        //filtrando dados conforme filtros da pagina selectExpenses
        expenses: selectExpenses(state.expenses, state.filters),
        //  filters:state.filters
        /*
        expenses: state.expenses, //pegando dados da loja 
        filters:state.filters
        */
    };
}
export default connect(mapStateToProps)(ExpenseList);
