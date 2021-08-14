import React from 'react';
import {View,StyleSheet} from 'react-native';

const CardItem = (props) => {
  return(
    <View style={styles.cardItem}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  cardItem: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});
export { CardItem };
