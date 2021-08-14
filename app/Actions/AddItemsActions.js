import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import {
  ADD_ITEM_ATTEMPT,
  ADD_ITEM_FAILED,
  ADD_ITEM_SUCCESS
} from './types' ;


const AddItemAttempt = () => {
  return {
    type :ADD_ITEM_ATTEMPT ,
  }
}



const AddItemFailed = (error) => {
  return {
    type : ADD_ITEM_FAILED ,
    payload : error
  }
}


const AddItemSuccess = () => {
  return{
    type : ADD_ITEM_SUCCESS ,

  }
}



const addNewItem = (item) => async dispatch => {




    const authorId  = await firebase.auth().currentUser ;

    const firstName = await firestore().collection('users').doc(authorId.uid).get().then(
      (documentSnapshot) => documentSnapshot.get('FirstName'));

    const lastName = await firestore().collection('users').doc(authorId.uid).get().then(
      (documentSnapshot) => documentSnapshot.get('LastName'));



    console.log (item.itemName);
    console.log (item.price);
    console.log (item.description);

    console.log (authorId.uid) ;
    console.log (firstName) ;
    console.log (lastName) ;


    dispatch(AddItemAttempt())


    try {
      firestore()
        .collection('Items')
        .add({
          ...item,
          authorFirstName : firstName ,
          authorLastName :lastName ,
          authorId : authorId.uid,
          createdAt : new Date()
        })
        .then (()=> {
          dispatch(AddItemSuccess())
        })

        .catch((err)=>{
          dispatch(AddItemFailed(err))
        })

    }

    catch(err){
      dispatch(AddItemFailed(err))

    }



}





export {addNewItem } ;
