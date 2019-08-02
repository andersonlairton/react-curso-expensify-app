import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

/*const EditExpensePage=(props)=>{

    console.log(props);
    return(
    <div>
    pagina de edição do id {props.match.params.id}
    </div>)
};*/

export class EditExpensePage extends React.Component{//definindo elemento de classe
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);//editanado
    this.props.history.push('/');//redirecionando
  }
  onRemove = () => {//removendo itens
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return(
    <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove}>Remove</button>
    </div>
    );
  };
}

const mapStateToProps = (state, props) => (
  {
  
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
);


const mapDispachToProps = (dispatch,props) => (
  {
    editExpense:(id,expense)=>dispatch(editExpense(id, expense)),
    removeExpense:(data)=>dispatch(removeExpense(data))

  }
);

export default connect(mapStateToProps,mapDispachToProps)(EditExpensePage);