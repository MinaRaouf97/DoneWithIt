import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,

  SIGN_IN_ATTEMPT,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,

  SIGN_OUT_ATTEMPT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
}
from './types';
///////////////////////////////////////////////////////////////////////////////


const CreateUserAttempt =() =>{
  return {
    type :CREATE_USER_ATTEMPT ,
  }

}


const CreateUserSuccess =(user) =>{
  return {
    type :CREATE_USER_SUCCESS ,
    payload:user ,

  }

}


const CreateUserfailed =(error) =>{
  return {
    type :CREATE_USER_FAILED ,
    payload: error,
  }

}

///////////////////////////////////////////////////////////////////

const SignInAttempt = () => {
  return {
    type:SIGN_IN_ATTEMPT,
  }

}

const SignInFailed = (error) => {
  return{
    type:SIGN_IN_FAILED,
    payload: error,
  }
}

const SignInSuccess = (user) => {
  return {
    type:SIGN_IN_SUCCESS ,
    payload:user,
  }
}
////////////////////////////////////////////////////////////////////////////////
const SignOutAttempt = () => {
  return {
    type:SIGN_OUT_ATTEMPT,

  }
}

const SignOutFailed = (error) => {
  return {
    type:SIGN_OUT_FAILED ,
    payload:error,
  }
}

const SignOutSuccess = (user) => {
  return {
    type:SIGN_OUT_SUCCESS ,
    payload:user,
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////






// action for create user
const createUser = (newUser)  => {
  // dispatch the action name

  return function (dispatch){
    dispatch(CreateUserAttempt())

      try{
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email,newUser.password)


        .then((resp)=>{

            firestore()
            .collection('users')
            .doc(resp.user.uid)
            .set({
              FirstName:newUser.firstName,
              LastName:newUser.lastName,
              PhoneNum:newUser.phoneNum


              })



            .then(()=>{
              console.log('created user successfuly ')
              dispatch(CreateUserSuccess(resp.user))

           })


        })
        .catch((error)=>{
          console.log(error)
          dispatch(CreateUserfailed(error))
        })
      }
      catch(error){
        console.log(error)
        dispatch(CreateUserfailed(error))
      }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////

// action for login user
const signIn = (oldUser) => {
  return function (dispatch){
    dispatch(SignInAttempt())
      firebase
        .auth()
        .signInWithEmailAndPassword(oldUser.email,oldUser.password)

        .then((user)=>{
          console.log('you loged in successfuly ')
          dispatch(SignInSuccess(user))
        })

        .catch((error)=> {
          dispatch(SignInFailed(error))
        })
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////





const signOut =()=>{
  return function(dispatch){
    dispatch(SignOutAttempt())
      firebase
        .auth()
        .signOut()
        .then(async (resp)=>{
          console.log('you logged out')
          await dispatch(SignOutSuccess(resp))
        })

        .catch((error)=>{
          console.log(error)
          dispatch(SignOutFailed(error))
        })
  }
}


export {signOut};
export {signIn} ;
export {createUser} ;
