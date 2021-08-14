import 'react-native-gesture-handler';

import React, {Component} from 'react' ;
import {View,Text,BackHandler} from 'react-native' ;

import {CardItem,Button} from './common';

import {signOut} from './Actions' ;
import {connect} from 'react-redux';




const mapStateToProps = state => {
  return {
   error: state.error ,
   loading: state.loading,
   user: state.user
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    signOut:() => dispatch (signOut())
  };
}





class Home extends Component{



  _logOut = () => {
    this.props.signOut(this.state);

  }



  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', function () {

      return true;
    });
  }

  
  componentDidUpdate(prevProps) {
      if (this.props.user !== prevProps.user) {
        this.props.navigation.navigate('LoginForm');
      }
  }


  render(){


    return(

      <View>
        <Text>Welcome You Login Successfully</Text>


        <CardItem>
          <Button onPress={this._logOut}>
            <Text>Log out</Text>
          </Button>
        </CardItem>
      </View>

    );

  }
}



export default connect(mapStateToProps,mapDispatchToProps) (Home) ;
