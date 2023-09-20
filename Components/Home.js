import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Dimensions } from 'react-native'

// Import the image using require
const bellIcon = require('../assets/bell.png');

import Slider from '@react-native-community/slider';

export default function Home() {

  const [pos,setPos] = useState(0);

  const slideHandler = (sliderVal) => {
    setPos(sliderVal)
  }

  return (

    <View style={styles.container}>
      <View style={styles.header} >
        <View>
          <Text style={styles.headerMorningText}>Good Morning,</Text>
          <Text style={styles.headerNameText}>Kumberly Janiqua</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={bellIcon} style={styles.notificationIcon}/>
        </View>
      </View>
      <View style={styles.quickMetrics} >
        <Text> Metrics </Text>
        <View style={styles.metrics} >
          <Text> Standing </Text>
          <Text> Sitting </Text>
          <Text> Trend </Text>
        </View>
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    paddingTop: 30,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: windowWidth,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  notificationIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  headerMorningText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  headerNameText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  quickMetrics: {
    width: windowWidth,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metrics: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  table: {
    backgroundColor: 'blue', 
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
  },
});
