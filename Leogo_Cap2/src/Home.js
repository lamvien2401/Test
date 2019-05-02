import React, { Component } from 'react';
import { } from 'react-native';
import Block from './components/Block';
import TextE from './components/TextE';
import ButtonE from './components/ButtonE';
import {Header} from 'react-native-elements';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Block>
        <Header 
          style ={{height: 20}}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'THỜI GIAN BIỂU', style: { color: '#fff' } }}/>
        <Block flex={3} backgroundColor={'#6c5ce7'}>
          <ButtonE
            center 
            middle 
            backgroundColor={'white'}
            height={50}
            borderRadius={4}
            marginTop={20}
          >
            <TextE>
              ABC
            </TextE>

          </ButtonE>
        </Block >
        <Block flex={1} backgroundColor={'#e84393'}>

        </Block>
        
      </Block>
    );
  }
}