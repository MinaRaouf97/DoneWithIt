import { NativeBaseProvider } from 'native-base';
import React , {Component} from 'react' ;



import {Provider} from 'react-redux' ;



import RootNavigator from './RootNavigator' ;

import Store from './Store' ;



export default class App extends Component {
  render(){
    return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <RootNavigator/>
      </NativeBaseProvider>
    </Provider>
  );
  }
}
