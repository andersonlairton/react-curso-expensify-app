/*import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
            calendarFocused: null
        };
    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange=(calendarFocused)=> {
        this.setState(()=>{calendarFocused});
    }
    render() {
        return (
            <div>

                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    //pesquisando os valores digitados no textbox
                    this.props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value)
                }} />
                <select/*filtragem pre-definida no combobox */
  /*                 value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        }
                        else if (e.target === 'amount') {
                            this.props.dispatch(sortByAmount());

                        }
                    }
                    }
                >
                    <option value="date">date</option>
                    <option value="amount">amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}


                    
                />
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateProps)(ExpenseListFilters); */

import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange=(e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange= (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  
    filters: state.filters
  
});
const mapDispatchProps=(dispatch)=>(
  {
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=>dispatch(sortByAmount()),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate))

  });

export default connect(mapStateToProps,mapDispatchProps)(ExpenseListFilters);

