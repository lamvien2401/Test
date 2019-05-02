import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
export default class Block extends Component {
  render() {
    const { flex, 
            center,
            middle,
            style,
            height,
            width,
            alignPadding,
            position,
            marginTop,
            marginLeft,
            backgroundColor,
            ...props} = this.props;
    const blockStyle = [
        styles.block,
        flex && {flex },
        center && styles.center,
        middle && styles.middle,
        height && {height },
        width && {width },
        alignPadding && styles.alignPadding,
        position && {position },
        marginLeft && {marginLeft },
        marginTop && {marginTop},
        backgroundColor && {backgroundColor },
          ]
    return (
      <SafeAreaView style={blockStyle} {...props} >
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    alignPadding: {
      paddingHorizontal: 16,
      paddingVertical: 11,
    } 
});