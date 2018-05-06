//Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
}
);

//Set Sort By Amount
export const sortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT',
}
);

//Set Sort By Date
export const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE',
}
);

//Set Start Date
export const setStartDate = (startDate =  undefined) =>({
    type: 'SET_START_DATE',
    startDate
})

//Set End Date
export const setEndDate = (endDate =  undefined) =>({
    type: 'SET_END_DATE',
    endDate
})