import React from 'react';
import { Text, View  } from 'react-native';

//Components
const Header = (props) => { //props parameters
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle} >{props.headerText}</Text>; // header return text
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, //gölge genişliği ve yüksekliği
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 20
  }
};
export default Header;
