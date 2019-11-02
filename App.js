import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';


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
  
  state={};

  handlePress=()=>{
    alert(`Tu nombre es ${this.state.text}`);
  }

  handleChange = text =>{
    console.log(text);
    this.setState({text});
  }
  
  render(){

    const { text }=this.state;

    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Chacaito"
          onChangeText={this.handleChange}
        />
        <Button
          title="Titulo del boton"
          onPress={this.handlePress}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress}
        >
          <Text>Aceptar</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback
          style={styles.button}
          onPress={this.handlePress}
        >
          <Text>Aceptar</Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handlePress}
        >
          <Text>Aceptar</Text>
        </TouchableOpacity>
      <Text>{text && `Mi nombre es ${text}`}</Text>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'cyan',
    height: 50,
    padding: 15
  },
  text:{
    
    height:100,
    width:100,
    backgroundColor:"brown",
    color:"red"
  },
  text2:{
    
    height:100,
    width:100,
    backgroundColor:"yellow",
    color:"red"
  },
  text3:{
    
    height:100,
    width:100,
    backgroundColor:"orange",
    color:"red"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
