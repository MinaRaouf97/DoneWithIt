import React, {Component} from 'react' ;
import {Text,TextInput,ToastAndroid,Keyboard} from 'react-native' ;
import {Card,CardItem,Button,Input} from './common';


import {connect} from 'react-redux' ;
import {addNewItem} from './Actions';






const mapStateToProps = state => {
  return {
   error: state.saveItem.error ,
   loading: state.saveItem.loading,
   saved : state.saveItem.saved
  };
}


const mapDispatchToProps = dispatch => {
  return{
    addNewItem:(item) => dispatch (addNewItem(item))
  };
}


class AddNewItem extends Component {


  constructor(props){
    super(props);
    this.state = {
      itemName :'',
      price:'',
      description : '',

    };
  }


  componentDidUpdate(prevProps) {
      if (this.props.saved !== prevProps.saved  ) {
        ToastAndroid.show('Item Save correctly',2000);
        this.props.navigation.navigate('My Items');

      }
  }

  _addItem = () => {
      this.props.addNewItem(this.state);

  }

  render(){


    return(

      <Card>
        <CardItem>
          <Input
          label='Item name'
          placeholder='Type Item name'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({itemName : text }) }}
          />
        </CardItem>

        <CardItem>
          <Input
          label='Price'
          placeholder='Type item price'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({price : text }) }}
          />
        </CardItem>

        <CardItem>
          <Input
          label='Description'
          placeholder='Type description'
          secureTextEntry={false}
          onChangeText={(text) => {this.setState({description : text }) }}
          />
        </CardItem>


        <CardItem>
          <Button onPress={this._addItem} >
              <Text>Add Item</Text>
          </Button>
        </CardItem>






      </Card>

    );

  }


}





export default connect(mapStateToProps,mapDispatchToProps)( AddNewItem )  ;
