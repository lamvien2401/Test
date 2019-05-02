import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Block from './components/Block';
import TextE from './components/TextE';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Block center middle>
        <TextE center middle color={'black'}> 
        Profile 
        </TextE>
      </Block>
    );
  }
}

export default Profile;