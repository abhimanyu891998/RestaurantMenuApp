import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import{ View, Platform, Image, StyleSheet, ScrollView,Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';



const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
            navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />          
          })
    
        },

    Dishdetail: {screen: Dishdetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
});

const HomeNavigator = createStackNavigator({
    Home: {screen: Home},
   
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const CustomDrawerContentComponent = (props) => (
<ScrollView>
    <SafeAreaView style={styles.container} forceInset={{top:'always', horizontal:'never'}}>
        <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
                <Image source={require('./images/logo.png')} style={styles.drawerImage}></Image>
            </View>
            <View style={{flex:2}}>
                <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
            </View>
        </View>
        <DrawerItems {...props}  />
    </SafeAreaView>
</ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
        })
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: ({ navigation }) => ({
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
         }), 
      }
    }, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
  
});



class Main extends Component {

    render(){
        return(
            <View style={{flex:1,paddingTop: Platform.OS=== 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });

export default Main;