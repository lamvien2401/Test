import React, { Component } from 'react';
import { TouchableOpacity , StyleSheet, Dimensions }  from 'react-native';
const {height, width} = Dimensions.get("window");
export default class ButtonE extends Component {
  render() {
    const { center,
            middle,
            backgroundColor,
            borderRadius,
            height,
            width,
            full,
            paddingHorizontal,
            paddingVertical,
            marginTop,
             ...props} = this.props;
    const buttonStyle = [
        center && styles.center, 
        middle && styles.middle,
        borderRadius && {borderRadius },
        backgroundColor && {backgroundColor },
        height && {height },
        width && {width },
        full && styles.full,
        paddingHorizontal && {paddingHorizontal },
        paddingVertical  && {paddingVertical },
        marginTop && {marginTop },
    ]
    return (
      <TouchableOpacity
        style={buttonStyle} {...props} >
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    }
});