import { combineReducers } from 'redux';

import AuthReducers from './AuthReducers';
import AddItemsReducer from './AddItemsReducer';
import UserItemsReducer from './UserItemsReducer' ;
import ListItemsReducer from './ListItemsReducer' ; 


export default combineReducers({


auth: AuthReducers,
saveItem: AddItemsReducer,
userItems: UserItemsReducer,
listItems: ListItemsReducer


});
