import {
    LIST_ITEMS_ATTEMPT,
    LIST_ITEMS_FAILED,
    LIST_ITEMS_SUCCESS
  } from '../Actions/types' ;


const INITIAL_STATE = {
  loading: false,
  error: '',
  listitems: []
 }


 export default  (state = INITIAL_STATE ,action ) => {

   switch (action.type) {

     case LIST_ITEMS_ATTEMPT : return {...state , loading:true }
     case LIST_ITEMS_FAILED  : return {...state, loading:false , error:action.payload}
     case LIST_ITEMS_SUCCESS : return {...state,loading:false , listitems:action.payload}


     default :
       return state ;

   }
 };
