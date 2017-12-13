import React from 'react';
import { View } from 'react-native';

import NotePad from './components/notepad';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NotePad />
      </View>
    );
  }
};
