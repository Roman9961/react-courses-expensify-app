import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from  'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
       this.setState(()=>({calendarFocused}));
    };
    render(){
        return (
            <React.Fragment>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy}
                        onChange={(e)=>{
                            e.target.value==='date'?this.props.dispatch(sortByDate()):this.props.dispatch(sortByAmount());
                        }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates={true}
                    numberOfMonths = {1}
                    isOutsideRange ={()=>false}
                />

            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);