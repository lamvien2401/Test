import React, { Component } from 'react';
import { View,
         Image,
         KeyboardAvoidingView,
         Dimensions,
         }
         from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation'
import Block from '../components/Block';  
import TextE from '../components/TextE';  
import Input from '../components/Input';
import ButtonE from '../components/ButtonE';

const {height} = Dimensions.get('window');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }  
  render() {
     
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{flex: 1}}
        
        
      >
      
        <Block 
          flex={1.5} 
          center 
          middle
          marginTop={50}
        >
          <Image source={require('../srcImage/Logo.png')} 
                 style={{resizeMode:'contain',height: 170,width: 170}}
          />
          <TextE fontSize={28}
                color={'#2e384d'} 
                spacing={0} 
                height={32}
          >
          Sign in to LEOGO 
          </TextE>
          <TextE 
            paddingTop={10} 
            color={'#8798ad'}
          >
          Please enter your credentials to preceed
          </TextE>
        </Block> 
        <Block 
          flex={3} 
          width={'100%'} 
          height={'100%'} 
          marginTop={10}
        >
          <Block alignPadding>
            <TextE color={'#8798ad'} 
                  marginBottom 
                  spacing={1.12} 
                  textTransform={'uppercase'}
            >
              EMAIL ADDRESS
            </TextE>
            <Input
              placeholder = "Enter Your email or Username"
              autoCapitalize = "none"
              keyboardType = "email-address"
              autoCorrect = {false}
              marginTop={6} 
              padding={10} 
              height={32} 
              fontSize={15}
            />
            <View style={{marginBottom: 8}}/>
            <TextE
              color={'#8798ad'} 
              marginBottom 
              spacing={1.12} 
              textTransform={'uppercase'}
            >
              PASSWORD
            </TextE>
            <Input
              placeholder = "Enter Password"
              secureTextEntry = {true}
              autoCapitalize = "none"
              autoCorrect = {false}
              marginTop={6} 
              padding={10} 
              height={32} 
              fontSize={15}
            />
            <View style={{marginBottom: 40}}/>
            <ButtonE 
              center middle
              backgroundColor={"#ffc048"}
              borderRadius={5}
              height={55}
              width={'100%'}
              onPress={()=>{
                
                //this.props.navigation.navigate('TabBarHomeScreen');
                 let pageContinue = StackActions.reset({
                   index: 0,
                   actions: [NavigationActions.navigate({ routeName: "TabBarHomeScreen", params: {} })]
                });
                this.props.navigation.dispatch(pageContinue);
              }}
            >
              <TextE 
                fontSize={20} 
                color={'#E0e7ff'}
              >
                Sign in
              </TextE>
            </ButtonE>
           </Block>
        </Block> 
      
      </KeyboardAvoidingView>
    );
  }
}

