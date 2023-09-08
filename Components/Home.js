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
      <View style={styles.header} />
        <Text> Good Morning, Kumberly Janiqua </Text>
        <Text> Notification Icon </Text>
      <View style={styles.quickMetrics} />
        <Text> Metrics </Text>
        <View style={styles.metrics} >
          <Text> Standing </Text>
          <Text> Sitting </Text>
          <Text> Trend </Text>
        </View>
      <View style={styles.tableControl} >
        <View style={styles.table} >
          <Text> Bluetooth Icon </Text>
          <Text> Kumberly's Standing Desk </Text>
        </View>
        <View style={styles.slider}>
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
        <View style={styles.tableButtons} >
          <Text> P1 </Text>
          <Text> P2 </Text>
          <Text> P3 </Text>
          <Text> P4 </Text>
          <Text> P5 </Text>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  quickMetrics: {
    backgroundColor: 'orange',
  },
  table: {
    backgroundColor: 'blue', 
    flex: 0.3
  },
  metrics: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  circle: {
    position: "relative",
    left: windowWidth/2,
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: "pink",
  },
  tableButtons: {
    flexDirection: 'row',
    backgroundColor: 'green',
  }
});
