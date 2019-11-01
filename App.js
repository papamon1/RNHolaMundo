import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


class Texto extends React.Component{
  state={
    texto: "Hola mundo"
  };

  handlePress = () => {
    this.setState({texto:'Adios mundo cruel!'})
  }

  render(){
    const { texto } = this.state;
    return <Text onPress={this.handlePress}>{texto}</Text>;
  }

};

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Asd</Text>
        <Text style={styles.text2}>Asd</Text>
        <Text style={styles.text3}>Asd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    flex:1,
    height:100,
    width:100,
    backgroundColor:"brown",
    color:"red"
  },
  text2:{
    flex:2,
    height:100,
    width:100,
    backgroundColor:"yellow",
    color:"red"
  },
  text3:{
    flex:3,
    height:100,
    width:100,
    backgroundColor:"orange",
    color:"red"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
