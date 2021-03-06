import React, { Componecnt } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error : null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      positon =>{
        this.setState({
          isLoaded: true,
          error : "Something went wrong"
        });
      },
      err =>{
        this.setState({
          error:err
        })
      }
    )
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? <Weather /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>getting the Weather??</Text>
        {error ? <Text style={styles.errorText}>{error}</Text>: null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection:'row',
    flexWrap:'wrap'

  },
  errorText:{
      color : "red",
      backgroundColor: 'transparent',
      marginBottom: 40
  },
  loading:{
    flex : 1,
      backgroundColor:'#FDF6AA',
      justifyContent: 'flex-end',
      paddingLeft:25
  },
  loadingText:{
    fontSize : 38,
    marginBottom : 100,
  }
});
