import {
    ADD_ITEM_ATTEMPT,
    ADD_ITEM_FAILED,
    ADD_ITEM_SUCCESS
  } from '../Actions/types' ;


const INITIAL_STATE = {
  loading: false,
  error: '',
  saved: false
 }


 export default  (state = INITIAL_STATE ,action ) => {

   switch (action.type) {

     case ADD_ITEM_ATTEMPT : return {...state , loading:true }
     case ADD_ITEM_FAILED  : return {...state, loading:false , error:action.payload}
     case ADD_ITEM_SUCCESS : return {...state,loading:false ,saved:true}  


     default :
       return state ;

   }
 };
