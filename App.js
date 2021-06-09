import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  // Create a variable which is called counter
  // To change the value of the variable, I will use setCounter method..
  // counter = counter + 1 <-- In React normally you will not use this..
  // The initital value is 0
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header} >Open up App.js to start working on your app!</Text>
      <Text style={styles.desc} > I am new to this app</Text>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.newImage}
        source={{
          url: 'data:image/png;base64,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',
        }}
      />
      <Button
        title="Press me now"
        onPress={() =>
          //Alert.alert('Simple Button pressed')
          // For the time being
          alert('Alert is pressed')
        }
      />
      <Text style={styles.subHeader}></Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}
        style={styles.btnInc}
      // onPress={onPress}
      >
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(counter - 1)}
        style={styles.btnDec}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => setCounter(0)}
        style={styles.button}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: 'darkblue',
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    color: '#f89',
    marginBottom: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  newImage: {
    width: 200,
    height: 90,
  },
  subHeader: {
    marginTop: 25,
  },
  btnInc: {
    alignItems: "center",
    backgroundColor: "#2971FF",
    padding: 10,
    marginBottom: 12,
  },
  btnDec: {
    alignItems: "center",
    backgroundColor: "#FF2929",
    padding: 10,
    marginBottom: 12,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
