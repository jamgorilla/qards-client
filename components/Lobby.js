import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Lobby extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lobby</Text>
        <Button
          onPress={() => navigate('Create')}
          title="Create Game"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  }
});