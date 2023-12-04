import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import BluetoothIndicator from './BluetoothIndicator';

// Import the image using require
const bellIcon = require('../assets/bell.png');
const standingIcon = require('../assets/standing.png');
const sittingIcon = require('../assets/sitting.png');
const trendIcon = require('../assets/trend.png');

export default function Home () {
  const [pos, setPos] = useState(0);

  const slideHandler = (sliderVal) => {
    setPos(sliderVal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerMorningText}>Good Morning,</Text>
          <Text style={styles.headerNameText}>Kumberly Janiqua</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={bellIcon} style={styles.notificationIcon} />
        </View>
      </View>
      <View style={styles.metricsContainer}>
        <Text style={styles.metricHeaderText}>METRICS</Text>
        <View style={styles.metricValuesContainer}>
          <View style={styles.metricValue}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.metricIconContainer}>
                <Image source={standingIcon} style={[styles.metricsIcon, { width: 32 }]} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text style={[styles.metricHours, { fontSize: 17 }]}>6:26</Text>
                <Text style={[styles.metricHours, { fontSize: 10, paddingLeft: 2 }]}>hr</Text>
              </View>
            </View>
            <Text style={{ color: '#595959' }}>Standing</Text>
          </View>
          <View style={styles.metricValue}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.metricIconContainer}>
                <Image source={sittingIcon} style={styles.metricsIcon} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text style={[styles.metricHours, { fontSize: 17 }]}>2:26</Text>
                <Text style={[styles.metricHours, { fontSize: 10, paddingLeft: 2 }]}>hr</Text>
              </View>
            </View>
            <Text style={{ color: '#595959' }}>Sitting</Text>
          </View>
          <View style={styles.metricValue}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.metricIconContainer}>
                <Image source={trendIcon} style={[styles.metricsIcon, { width: 25 }]} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text style={[styles.metricHours, { fontSize: 17 }]}>0:26</Text>
                <Text style={[styles.metricHours, { fontSize: 10, paddingLeft: 2 }]}>hr</Text>
              </View>
            </View>
            <Text style={{ color: '#595959' }}>Trend</Text>
          </View>
        </View>
      </View>
      <View style={styles.tableAnimation} >
        <BluetoothIndicator/>
        <View style={styles.slider}>

          <View style={{ justifyContent: 'center', flexDirection: 'row', top: pos * 75 }}>
            <View style={[styles.standingDeskTableTop, styles.standingDesk]} />
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row', top: pos * 75 }}>
            <View style={[styles.standingDeskLegTop, styles.standingDesk, { left: '7%' }]} />
            <View style={[styles.standingDeskLegTop, styles.standingDesk, { right: '7%' }]} />
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={[styles.standingDeskLegBottom, styles.standingDesk, { left: '3.5%' }]} />
            <View style={[styles.standingDeskLegBottom, styles.standingDesk, { right: '3.5%' }]} />
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={[styles.standingDeskLegfeet, styles.standingDesk]} />
            <View style={[styles.standingDeskLegfeet, styles.standingDesk]} />
          </View>

          <View style={styles.userTable} >
            <Text style={{ textAlign: 'center' }}> {'Kumberly\'s Standing Desk'}</Text>
          </View>
        </View>
      </View>
      <View style={styles.heightControl}>
        <Slider
          style={{ width: '100%', height: '25%' }}
          minimumValue={1}
          maximumValue={0}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={slideHandler}
        />

        <View style={[styles.tableButtons, { justifyContent: 'space-between' }]}>
          <View style={styles.buttons} />
          <View style={styles.buttons} />
          <View style={styles.buttons} />
          <View style={styles.buttons} />
          <View style={styles.buttons} />
        </View>
      </View>
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'red', flex: 0.3, borderBottomRightRadius: 50 }} />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    paddingTop: 30,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
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
    fontSize: 29,
    includeFontPadding: false,
  },
  headerNameText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    includeFontPadding: false,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  metricsContainer: {
    width: '90%',
    backgroundColor: '#d8e4e8',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 20,
  },
  metricHeaderText: {
    width: '90%',
    color: 'black',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 25,
    paddingVertical: 8,
    borderBottomColor: '#595959',
    borderBottomWidth: 0.5,
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
  metricValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  metricValue: {
    backgroundColor: '#e4ecef',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  metricIconContainer: {
    backgroundColor: 'white',
    borderRadius: 60,
    width: 40,
    height: 40,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  metricsIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  metricHours: {
    fontWeight: 700,
  },
  slider: {
    marginTop: 10,
  },
  tableAnimation: {
    flexDirection: 'column',
    width: '90%',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 25,
  },
  standingDesk: {
    backgroundColor: 'black',
  },
  standingDeskTableTop: {
    width: '100%',
    height: 10,
  },
  standingDeskLegTop: {
    width: '2%',
    height: 75,
  },
  standingDeskLegBottom: {
    width: '3%',
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  standingDeskLegfeet: {
    width: '7%',
    height: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  userTable: {
    margin: 5,
    backgroundColor: 'grey',
  },
  heightControl: {
    width: '90%',
    height: '15%',
    // backgroundColor: 'peachpuff'
  },
  tableButtons: {
    flexDirection: 'row',
    // backgroundColor:'green',
    width: '100%',
  },
  buttons: {
    backgroundColor: 'paleturquoise',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
