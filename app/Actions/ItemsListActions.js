import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import {
  USER_ITEMS_ATTEMPT,
  USER_ITEMS_FAILED,
  USER_ITEMS_SUCCESS
} from './types' ;



const ListItemsAttempt = () => {
  return {
    type : LIST_ITEMS_ATTEMPT ,
  }
}



const ListItemsFailed = (error) => {
  return {
    type : LIST_ITEMS_FAILED ,
    payload : error
  }
}


const ListItemsSuccess = (itemslist) => {
  return{
    type : LIST_ITEMS_SUCCESS ,
    payload:itemslist


  }
}



const fetchItems = () => async dispatch =>{


  const authorId  = await firebase.auth().currentUser ;
    console.log (authorId.uid) ;

  dispatch(ListItemsAttempt())

  try {
    firestore()
      .collection('Items')

      .where('authorId', '!=', authorId.uid)
      .get()
      .then((documentSnapshot) =>  {


        const itemslist =[]
        documentSnapshot.forEach((doc) => {
        //  console.log(doc.id , '=>', doc.data())

           itemslist.push(doc.data())
        //  console.log(data)

          dispatch(ListItemsSuccess(itemslist))

        })


      })

      .catch((err)=>{
      dispatch(ListItemsFailed(err))
    })

  }
  catch(err){
    dispatch(ListItemsFailed(err))
  }


}
export  {fetchItems};
