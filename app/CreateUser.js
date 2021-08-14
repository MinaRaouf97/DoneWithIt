import 'react-native-gesture-handler';
import React ,{Component} from 'react';
import {Text,TextInput} from 'react-native' ;


import {connect} from 'react-redux';
import {createUser} from './Actions' ;

import {Card,CardItem,Button,Input} from './common';



const mapStateToProps = state => {
  return {
   error: state.auth.error ,
   loading: state.auth.loading,
   user: state.auth.user
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    createUser:(newUser) => dispatch (createUser(newUser))
  };
}




class CreateUser extends Component {


  // constructor to pass data of the user
    constructor(props){
      super(props);
      this.state = {
          email: '',
          password:'',
          firstName:'',
          lastName:'',
          phoneNum:'',

        };
    }

    _addUser = () => {

      this.props.createUser(this.state);
    }



  render(){
    return(
      <Card>
        <CardItem>
          <Input
          label='Email'
          placeholder='Type your email'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({email : text }) }}
          />
        </CardItem>

        <CardItem>
          <Input
          label='First Name'
          placeholder='Type your First Name'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({firstName : text }) }}
          />
        </CardItem>


        <CardItem>
          <Input
          label='Last Name'
          placeholder='Type your First Name'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({lastName : text }) }}
          />
        </CardItem>


        <CardItem>
          <Input
          label='Phene Number'
          placeholder='Type your Phone Numer'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({phoneNum : text }) }}
          />
        </CardItem>

        <CardItem>
          <Input
          label='password'
          placeholder='Type your password'
          secureTextEntry={true}
          onChangeText={(text) => {this.setState({password : text }) }}/>
        </CardItem>

        <CardItem>
          <Input label='Confirm password' placeholder='Retype your password' secureTextEntry={true}/>
        </CardItem>


        <CardItem>
          <Button onPress={this._addUser}>
              <Text>Sign Up</Text>
          </Button>
        </CardItem>







      </Card>
    );

  }



}





export default connect(mapStateToProps,mapDispatchToProps)( CreateUser ) ;
