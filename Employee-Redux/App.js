import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeApp from './src/EmployeeApp'

const initState = {
  1 : {
    empid : 1,
    empName : 'Employee 1',
    empSalary : 10000.0
  },
  2 : {
    empid : 2,
    empName : 'Employee 2',
    empSalary : 20000.0
  },
  3 : {
    empid : 3,
    empName : 'Employee 3',
    empSalary : 30000.0
  },
  4 : {
    empid : 4,
    empName : 'Employee 4',
    empSalary : 40000.0
  },
  5 : {
    empid : 5,
    empName : 'Employee 5',
    empSalary : 50000.0
  },
}

const reducer = (state = initState, action) => {
  
  let initSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if(action.id) {
    initSalary = state[action.id].empSalary;
    increment = (initSalary / 100) * 20;
  }

  switch (action.type) {
    case 'GOOD_PERFORMANCE':
      newSalary = initSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state);
    case 'BAD_PERFORMANCE':
      newSalary = initSalary - increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state);
  }
  return state;
}

const store = createStore(reducer);

export default class App extends React.Component{
  render() {
    return (
      <Provider store = {store} >
        <EmployeeApp></EmployeeApp>
      </Provider>
    );
  }  
}
