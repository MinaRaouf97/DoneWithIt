import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import {
  USER_ITEMS_ATTEMPT,
  USER_ITEMS_FAILED,
  USER_ITEMS_SUCCESS
} from './types' ;



const UserItemsAttempt = () => {
  return {
    type : USER_ITEMS_ATTEMPT ,
  }
}



const UserItemsFailed = (error) => {
  return {
    type : USER_ITEMS_FAILED ,
    payload : error
  }
}


const UserItemsSuccess = (userlist) => {
  return{
    type : USER_ITEMS_SUCCESS ,
    payload:userlist


  }
}



const fetchuserItems = () => async dispatch =>{


  const authorId  = await firebase.auth().currentUser ;
    console.log (authorId.uid) ;

  dispatch(UserItemsAttempt())

  try {
    firestore()
      .collection('Items')

      .where('authorId', '==', authorId.uid)
      .get()
      .then((documentSnapshot) =>  {


        const userlist =[]
        documentSnapshot.forEach((doc) => {
        //  console.log(doc.id , '=>', doc.data())

           userlist.push(doc.data())
        //  console.log(data)

         

        })
        dispatch(UserItemsSuccess(userlist))

      })

      .catch((err)=>{
      dispatch(UserItemsFailed(err))
    })

  }
  catch(err){
    dispatch(UserItemsFailed(err))
  }


}
export  {fetchuserItems};
