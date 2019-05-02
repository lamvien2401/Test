import React, { Component } from 'react';
import { View, Text ,TextInput,Image,KeyboardAvoidingView,Dimensions} from 'react-native';
import Block from '../components/Block';  
import TextE from '../components/TextE';  
import Input from '../components/Input';
import ButtonE from '../components/ButtonE';

const widthT=Dimensions.get('window').width;
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
            behavior={'position'}
            enabled
             style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
        <Image 
            style={{height:150,width:150,marginTop:70,resizeMode:'contain'}}
            source={require('../srcImage/Logo.png')} >
        
        </Image>
        <Text style={{fontSize:27,color:'black'}}>Dang Nhap</Text>
        <Text style={{fontSize:18,color:'black',marginTop:10}}>Dien thong tin</Text>
        <View style={{alignItems:'flex-start',width:widthT,marginTop:50,paddingHorizontal:30,}}>
            <Text style={{fontSize:20,color:'gray'}}>Name</Text>
            <TextInput style={{height:50 ,paddingLeft:30, borderWidth:2 ,width:300,borderColor:'gray',borderRadius:20,marginTop:10}}>dasd</TextInput>
        </View>
        
      </KeyboardAvoidingView>
    );
  }
}
