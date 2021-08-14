import 'react-native-gesture-handler';
// import libraries
import React , {Component} from 'react';
import {Text,TouchableOpacity,Alert} from 'react-native';


import {connect} from 'react-redux';
import {signIn} from './Actions' ;

import {Button,Card,CardItem,Input} from './common' ;


const mapStateToProps = state =>{

  return{
    loading : state.auth.loading ,
    error : state.auth.error ,
    user: state.auth.user ,
  };
}



const mapDispatchToProps = dispatch => {

  return {
    signIn:(oldUser) => dispatch(signIn(oldUser))

  };

}


//if(props.error){
  //Alert.alert('OOPS','Something is wrong with email or password',[
    //{text : 'Try Login again' , onPress:()=>console.log('alert closed')}]);
//}


class LoginForm extends Component {

// constructor to pass data of the user
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''

      };
  }

  componentDidUpdate(prevProps) {
      if (this.props.user !== prevProps.user) {
      //  this.props.navigation.navigate('Home');
      this.props.navigation.navigate('DrawerRoutes', { screen: 'Home' });
      }
     else if (this.props.error ) {
      Alert.alert('OOPS','Something is wrong with email or password',[
        {text : 'Try Login again' }]);

     }
  }


  //function of Button to go to create user page
  _onCreateUserPressed(){
    this.props.navigation.navigate('CreateUser');
  }


//function of button to sign In
  _signInPressed=()=>{

    this.props.signIn(this.state);

  }



  render() {
    return (
      <Card>
        <CardItem>
          <Input
          label='email'
          placeholder='Type your Email'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({email : text }) }}/>
        </CardItem>

        <CardItem>
          <Input
          label='password'
          placeholder='Type your password'
          secureTextEntry={true}
          onChangeText={(text) => {this.setState({password : text }) }}/>

        </CardItem>


        <CardItem>
          <Button
            onPress={this._signInPressed}>
              <Text>Login</Text>
          </Button>
        </CardItem>




        <CardItem>
          <TouchableOpacity onPress={this._onCreateUserPressed.bind(this)}>
              <Text>Create account</Text>
          </TouchableOpacity>
        </CardItem>




      </Card>









    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm) ;
