import React, { Component } from 'react';
import { TextInput , StyleSheet } from 'react-native';
export default class Input extends Component {
  render() {
    const { center,
            color,
            middle,
            padding,
            marginTop,
            backgroundColor,
            height,
            width,
            spacing,
            textTransform,
            full,
             ...props} = this.props;
    const textInputStyle = [
        styles.input,
        center && styles.center, 
        middle && styles.middle,
        color && {color },
        padding && {padding },
        marginTop && {marginTop },
        width && {width },
        backgroundColor && {backgroundColor },
        height && {lineHeight: height },
        spacing && {letterSpacing: spacing },
        textTransform && {textTransform },
        full && styles.full,
    ]
    return (
      <TextInput 
        style={textInputStyle} {...props} >
      </TextInput>
    );
  }
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(46,92,255,0.20)',
        borderWidth: 1,
        borderColor: '#E0e7ff',
        color: '#2e384d',
        borderRadius: 5, 
        height: 55
    }, 
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    }
});