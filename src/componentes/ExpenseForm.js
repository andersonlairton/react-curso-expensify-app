import React from 'react'
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
 //import 'react-dates/lib/css/_datepicker.css';

//const now = moment();//CONFIGURANDO DATA
//console.log(now.format('MMM Do,YYYY'));
export default class ExpenseForm extends React.Component {
    constructor (props)
    {
        super(props);
        this.state =
        {
            descricao: props.expense?props.expense.descricao:'',
            note: props.expense?props.expense.note:'',
            amount: props.expense?(props.expense.amount/100).toString():'',
            createAt: props.expense? moment(props.expense.createAt):moment(),
            calendarFocused: false,
            error:''
        };
    }
    
    onDescriptionChange = (e) => {
        const descricao = e.target.value;
        this.setState(() => ({ descricao }));
    }
    onNoteCharge = (n) => {
        const note = n.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (a) => {
        const amount = a.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({ createAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
/* 
    enviarForm=(e)=> {
        e.preventDefault();
        if(!this.state.descricao||!this.state.amount)
        {
            this.setState(()=>({error:'digite os dados para enviar'}));
            console.log('digite dados para enviar');

        }
        else
        {
            this.setState(()=>({error:''}));
           // console.log('enviado');
            //enviado dados
            this.props.onSubmit(
                {
                    descricao:this.state.descricao,
                    amount:parseFloat(this.state.amount,10)*100,
                    createAt:this.state.createAt.valueOf(),
                    note:this.setState.note
                });
        }

    }*/
   enviarForm = (e) => {
        e.preventDefault();
    
        if (!this.state.descricao || !this.state.amount) 
        {
          this.setState(() => ({ error: 'digite os dados para enviar' }));
        } else 
        {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit(
            {
            descricao: this.state.descricao,
            amount: parseFloat(this.state.amount, 10) * 100,
            createAt:this.state.createAt.valueOf(),
            note: this.state.note
            }
            );
        }
      };

      
    render() {
        return (
            <div>
            {this.state.error &&<p>{this.state.error}</p>}
                <fieldset>
                    Adicionar despensa
                </fieldset>
                <form onSubmit={this.enviarForm}>
                    <input
                        type="text"
                        placeholder="descrição"
                        autoFocus
                        value={this.state.descricao}
                        onChange={this.onDescriptionChange}
                    />

                    <input type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}

                    />

                    <SingleDatePicker//configurando campo data
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        placeholder="adicionar nota é opcional"
                        value={this.state.note}
                        onChange={this.onNoteCharge}
                    />
                    <button>Adicionar despensa</button>
                </form>
            </div>
        )
    }
}
