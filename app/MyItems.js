import React, {Component} from 'react' ;
import {View,Text,FlatList,ScrollView,SafeAreaView } from 'react-native' ;
import {Button,CardItem} from './common';

import {connect} from 'react-redux' ;
import {fetchuserItems} from './Actions';


import { VStack, Box, Divider,Image } from 'native-base';

  




const mapStateToProps = state => {
  return {
   error: state.userItems.error ,
   loading: state.userItems.loading,
   useritems : state.userItems.useritems
  };
}


const mapDispatchToProps = dispatch => {
  return{
    fetchuserItems:() => dispatch (fetchuserItems())
  };
}




class MyItems extends Component {




  componentDidMount(){
    this.props.fetchuserItems();

  }

  _onAddNewItemrPressed(){
  //this.props.navigation.navigate('MyItemsStackScreen', { screen: 'AddNewItems' })
  this.props.navigation.navigate('AddNewItems');

   }

  renderList =()=>{

     
   // console.log(this.props.useritems);
    const data = this.props.useritems;
    console.log(data)
   

  
      return this.props.useritems.map((item,i)=>{
        return(

        
        <Box  borderRadius='md' key={i} >
          <VStack space={1} divider={<Divider />}>
          
            <Box px={4}>
            <Text>{item.itemName}</Text> 
              <Text> {item.description}</Text>
            </Box>
  
            <Box px={4}>
                  {item.price}
            </Box>

            <Box px={4}>
                {item.authorFirstName} 
            </Box>
          </VStack>
       </Box>
  
       );

     }

      );   
       
    
    }

  
  render(){




    

    return(


      <ScrollView style={{flex: 1}}>

        <Text>My Items Screen</Text>
        <SafeAreaView>
        <FlatList
          data={this.props.useritems}
          renderItem= { ({item}) =>(
              <View>
                <Text>{item.itemName}</Text>
                <Text>{item.price}</Text>
              </View>
            )
          }

        keyExtractor ={(item,index) => index.toString()}

        />

        </SafeAreaView>
        
        <SafeAreaView style={{flex: 1}}>
        
         {this.renderList()}
        </SafeAreaView>
   


        <CardItem>
          <Button onPress={this._onAddNewItemrPressed.bind(this)} >
                <Text>Add new Item</Text>
          </Button>
        </CardItem>
    
      </ScrollView>

    );

  }


}





export default connect(mapStateToProps,mapDispatchToProps)(MyItems)  ;
