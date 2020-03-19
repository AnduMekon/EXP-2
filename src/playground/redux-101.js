import { createStore } from 'redux';


const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 10
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});
store.subscribe(()=> {
   console.log(store.getState()); 
})


// Actions - than an object that gets sent to the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});



  store.dispatch({
    type: 'INCREMENT'
  });
  store.dispatch({
    type: 'RESET'
  });









// action type name alwasys has to be capital letter.
    //the type object has to be inside the dispatch in order to put

