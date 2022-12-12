const initialWagonState = { 
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const reducer = (state = initialWagonState, action) => {
  switch(action.type) {
    case 'gather' : {
      return {
        ...state,
        supplies: state.supplies + 15*action.payload,
        days: state.days + action.payload,
      }
    }
    case 'travel' : {
      const checkSupplies = {
        ...state,
        supplies: state.supplies - 20*action.payload,
        distance: state.distance + 10*action.payload,
        days: state.days + action.payload,
      };
      return checkSupplies.supplies < 0 ? state : checkSupplies
    }
    case 'tippedWagon' : {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      }
    }
    case 'sell' : {
      const checkSupplies = {
        ...state,
        cash: state.cash + 5*action.payload,
        supplies: state.supplies - 20*action.payload,
      };
      return checkSupplies.supplies < 20 ? state : checkSupplies
    }
    case 'buy' : {
      const checkCash = {
        ...state,
        cash: state.cash - 15*action.payload,
        supplies: state.supplies + 25*action.payload,
      };
      return checkCash < 25 ? state : checkCash;
    }
    case 'theft' : {
      return {
        ...state,
        cash: state.cash / 2,
      }
    }
    default: 
      return state;
  }
}

let wagon = reducer(undefined, {});
console.log(wagon);

wagon = reducer(wagon, {type:'travel', payload: 1});
console.log(wagon);

wagon = reducer(wagon, {type:'gather', payload:5});
console.log(wagon);

wagon = reducer(wagon, {type:'theft'});
console.log(wagon);

wagon = reducer(wagon, {type:'buy', payload: 3});
console.log(wagon);

wagon = reducer(wagon, {type:'tippedWagon'});
console.log(wagon);

wagon = reducer(wagon, {type:'gather', payload:5});
console.log(wagon);

wagon = reducer(wagon, {type:'sell', payload: 3});
console.log(wagon);

wagon = reducer(wagon, {type:'travel', payload: 3});
console.log(wagon);

wagon = reducer(wagon, {type:'gather', payload:3});
console.log(wagon);



