import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dimensions } from 'react-native'

import Slider from '@react-native-community/slider';

export default function Home() {

  const [pos,setPos] = useState(0);

  const slideHandler = (sliderVal) => {
    setPos(sliderVal)
  }

  return (
    <View style={styles.container}>

      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.3, borderBottomRightRadius: 50}} >

        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={slideHandler}
        />
        
        <Text> {pos} </Text>
        
        {/* create a standing desk with shapes and move it with a slide bar */}

      </View>

      <View style={[styles.circle, {top: -150 - pos*100}]} />

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // circle: {
  //   top: -50,
  //   left: windowWidth-50,
  //   top: -75,
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  //   backgroundColor: "green",
  // },
  circle: {
    left: windowWidth/2,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "pink",
  },
});
