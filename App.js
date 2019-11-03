import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';


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
      <View>
        <FlatList
          data={[
            {name: "Eduardo", key:'1'},
            {name: "Eduardo", key:'2'},
            {name: "Eduardo", key:'3'},
            {name: "Eduardo", key:'4'},
            {name: "Eduardo", key:'5'},
            {name: "Eduardo", key:'6'},
            {name: "Eduardo", key:'7'},
            {name: "Eduardo", key:'8'},
            {name: "Eduardo", key:'9'},
            {name: "Eduardo", key:'10'},
            {name: "Eduardo", key:'11'},
            {name: "Eduardo", key:'12'},
          ]}
          renderItem={({item})=>(
            <Text style={{fontSize:80}}>{item.name}</Text>
        )}
        >
       
        </FlatList>      
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
