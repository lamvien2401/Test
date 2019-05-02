import React, { Component } from 'react';
import Home from '../Home';
import Profile from '../Profile';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
const TabBarNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: Home
    },
    ProfileScreen: {
        screen: Profile
    }
},
)

export default createAppContainer(TabBarNavigator);
