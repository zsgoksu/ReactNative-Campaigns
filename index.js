//kütüphaneler

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
//komponentler - Bileşenler

const App = () => (
    <Header headerText={'Titles!'} />
  );

//Cihaz ayarları
AppRegistry.registerComponent('albums', () => App);
