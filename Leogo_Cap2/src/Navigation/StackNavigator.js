import React, { Component } from 'react';
import Login from '../Authenication/Login';
import index from './TabBottomNavigator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const AppNavigator = createStackNavigator({
    LoginScreen: {
        screen: Login
    },
    TabBarHomeScreen: {
        screen: index
    }
},
    {
        initialRouteName: 'LoginScreen',
        headerMode: "none"
    }
)

export default createAppContainer(AppNavigator);
