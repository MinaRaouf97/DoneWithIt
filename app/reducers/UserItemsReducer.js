import {
    USER_ITEMS_ATTEMPT,
    USER_ITEMS_FAILED,
    USER_ITEMS_SUCCESS
  } from '../Actions/types' ;


const INITIAL_STATE = {
  loading: false,
  error: '',
  useritems: []
 }


 export default  (state = INITIAL_STATE ,action ) => {

   switch (action.type) {

     case USER_ITEMS_ATTEMPT : return {...state , loading:true }
     case USER_ITEMS_FAILED  : return {...state, loading:false , error:action.payload}
     case USER_ITEMS_SUCCESS : return {...state,loading:false , useritems:action.payload}  


     default :
       return state ;

   }
 };
