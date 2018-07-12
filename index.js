//kütüphaneler

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';
//komponentler - Bileşenler

const App = () => (
  <View style={{ flex: 1 }}> //ScrollView full screen style.
    <Header headerText={'Albums'} />
    <Albumlist />
  </View>
  );



//Cihaz ayarları
AppRegistry.registerComponent('albums', () => App);
