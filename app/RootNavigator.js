import React from 'react' ;
import {NavigationContainer }  from '@react-navigation/native' ;
import {createStackNavigator}  from '@react-navigation/stack';
import {createDrawerNavigator,
        DrawerContentScrollView,
        DrawerItemList,
        DrawerItem} from '@react-navigation/drawer';

import LoginForm from './LoginForm' ;
import CreateUser from './CreateUser';
import Home from './Home' ;
import Profile from './Profile';
import MyItems from './MyItems';
import AddNewItem from './AddNewItem' ;
import {connect} from 'react-redux';
import {signOut} from './Actions' ;


import Store from './Store';




const mapDispatchToProps = (dispatch) =>{
  return {
      signOut:() => Store.dispatch (signOut())
  };
}

const mapStateToProps = state => {
  return {
   error: state.error ,
   loading: state.loading,
   user: state.user
  };
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackScreen = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          title: 'Login Form',
          headerLeft:null
         }}

      />


      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{title:'Sign Up'}}
      />



    </Stack.Navigator>


  );
}




const HomeStackScreen = () => {
  return (
    <Stack.Navigator>

     <Stack.Screen
        name="Home"
        component={Home}
        options={{
        title: 'Home' ,
        headerLeft:null
        }}
       />



    </Stack.Navigator>


  );
}






const ProfileStackScreen =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerLeft:null
           }}

      />
    </Stack.Navigator>

  );
}

const MyItemsStackScreen =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="My Items"
        component={MyItems}
        options={{
        title:'My Items',
        headerLeft:null

          }}

      />


      <Stack.Screen
        name="AddNewItems"
        component={AddNewItem}
        options={{
        title:'Add new Items',
          }}
          />




    </Stack.Navigator>

  );
}


const signOutPressed = () => {
  Store.dispatch(signOut());
  console.log("action is fired ");
}


const CustomDrawerContent =(props)=>{
  return(
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout"  onPress={signOutPressed} />
    </DrawerContentScrollView>
  )
}

const DrawerRoutes = () => {
    return (
      <Drawer.Navigator initialRouteName={HomeStackScreen}
        drawerContent ={props=> <CustomDrawerContent {...props}/>}

      >
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name= "Profile" component ={ProfileStackScreen} />
        <Drawer.Screen name= "My Items" component ={MyItemsStackScreen} />
      </Drawer.Navigator>
    );
}

// screenOptions={{    headerShown: false}}
const TotalRoutes = ()=>{
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{
          headerShown: false,
          headerLeft:null
      }}
      />


      <Stack.Screen
        name="DrawerRoutes"
        component={DrawerRoutes}
        options={{
          headerShown: false,
          headerLeft:null
      }}

      />



    </Stack.Navigator>


  );

}





const RootNavigator =()=> {
  return (
    <NavigationContainer>
      < TotalRoutes/>
    </NavigationContainer>
  );
};




export default connect (mapStateToProps,mapDispatchToProps)(RootNavigator) ;
