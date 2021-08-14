import React from 'react';
import {Text,TextInput,StyleSheet,View} from 'react-native';

const Input = (props) => {
    return(
      <View style={styles.inputcontainer}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput placeholder={props.placeholder}  style={styles.input} secureTextEntry={props.secureTextEntry}  onChangeText={props.onChangeText} />
      </View>
    );
}


const styles=StyleSheet.create({
  inputcontainer:{
    flexDirection:'row',
    alignItems:'center',
    height:40

  },
  label:{
    fontSize:16,
    paddingLeft:20,
  },
  input:{
    fontSize:16,
    color:'#000',
    paddingLeft:5,
    paddingRight:5


  }
});


export {Input} ;
