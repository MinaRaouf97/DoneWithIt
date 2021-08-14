import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';


const Button = (props) => {
  return(
    <TouchableOpacity style={styles.button} onPress={props.onPress} >
      <Text style={styles.text}>
      {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    marginHorizontal: 25,
    marginVertical: 10,
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(42,55,68)',
    flex:1
    //alignSelf: 'stretch',

  },
  text:{
    alignSelf:'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10 ,
    paddingBottom: 10

  }
});

export {Button} ;
