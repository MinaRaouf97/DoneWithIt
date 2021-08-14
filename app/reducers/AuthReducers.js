//import {createStore,applyMiddleware} from 'redux';
//import thunkMiddleware from 'redux-thunk';
import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,

  SIGN_IN_ATTEMPT,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,

  SIGN_OUT_ATTEMPT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,

} from '../Actions/types';



// Initial state
const INITIAL_STATE = {
  loading:false,
  user:{},
  error:'',
};



// create reducers
export default  (state = INITIAL_STATE ,action ) => {

  switch (action.type) {

    case CREATE_USER_ATTEMPT : return {...state , loading:true }
    case CREATE_USER_FAILED: return{...state, loading:false , error:action.payload}
    case CREATE_USER_SUCCESS : return {...state,loading:false ,user:action.payload}


    case SIGN_IN_ATTEMPT : return {...state , loading:true }
    case SIGN_IN_FAILED : return {...state , loading : false , error:action.payload}
    case SIGN_IN_SUCCESS : return {...state , loading: false , user:action.payload}


    case SIGN_OUT_ATTEMPT: return {...state , loading:true}
    case SIGN_OUT_FAILED: return {...state, loading:false , error:action.payload}
    case SIGN_OUT_SUCCESS : return {...state , loading: false , user:action.payload}


    default :
      return state ;

  }
};



//create store that takes reducer and applyMiddleware
//const store = createStore(reducer,applyMiddleware(thunkMiddleware));


//export store to be public
//export {store};
