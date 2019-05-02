import React, { Component } from 'react';
import { Text , StyleSheet } from 'react-native';
export default class Typography extends Component {
  render() {
    const { center,
            color,
            fontSize,
            style,
            middle,
            paddingTop,
            marginBottom,
            backgroundColor,
            height,
            spacing,
            paddingBottom,
             ...props} = this.props;
    const textStyle = [
        center && styles.center, 
        middle && styles.middle,
        color && {color },
        fontSize && {fontSize },
        paddingTop && {paddingTop },
        marginBottom && styles.marginBottom,
        backgroundColor && {backgroundColor },
        height && {lineHeight: height },
        spacing && {letterSpacing: spacing },
        paddingBottom && {paddingBottom },
    ]
    return (
      <Text style={textStyle} {...props} >
      </Text>
    );
  }
}
const styles = StyleSheet.create({
    text: {
        textTransform: 'uppercase',
    }, 
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    marginBottom: {
        marginBottom: 4,
    }
});