import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Dimensions } from 'react-native'

// Import the image using require
const bellIcon = require('../assets/bell.png');
const standingIcon = require('../assets/standing.png');
const sittingIcon = require('../assets/sitting.png');
const trendIcon = require('../assets/trend.png');

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
      <View style={styles.metricsContainer} >
        <Text style={styles.metricHeaderText}>METRICS</Text>
        <View style={styles.metricValuesContainer} >
          <View style={styles.metricValue}> 
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.metricIconContainer}>
                <Image source={standingIcon} style={[styles.metricsIcon, {width: 32}]}></Image>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[styles.metricHours, {fontSize: 17}]}>6:26</Text>
                <Text style={[styles.metricHours, {fontSize: 10, paddingLeft: 2}]}>hr</Text>
              </View>
            </View>
            <Text style={{color: '#595959'}}>Standing</Text>  
          </View>
          <View style={styles.metricValue}> 
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <View style={styles.metricIconContainer}>
                <Image source={sittingIcon} style={styles.metricsIcon}></Image>
            </View>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[styles.metricHours, {fontSize: 17}]}>2:26</Text>
                <Text style={[styles.metricHours, {fontSize: 10, paddingLeft: 2}]}>hr</Text>
              </View>
            </View>
            <Text style={{color: '#595959'}}>Sitting</Text>  
          </View>
          <View style={styles.metricValue}> 
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
              <View style={styles.metricIconContainer}>
                <Image source={trendIcon} style={[styles.metricsIcon, {width: 25}]}></Image>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[styles.metricHours, {fontSize: 17}]}>0:26</Text>
                <Text style={[styles.metricHours, {fontSize: 10, paddingLeft: 2}]}>hr</Text>
              </View>
            </View>
            <Text style={{color: '#595959'}}>Trend</Text>  
          </View>
        </View>
      </View>
      <View style={styles.tableControl} >
        <View style={styles.table} >
          <Text> Bluetooth Icon </Text>
          <Text> Kumberly's Standing Desk </Text>
        </View>
        <View style={styles.slider}>
  
          {/* add table top  */}

          <View style={{justifyContent:'space-between', flexDirection:'row', backgroundColor: 'grey', top: pos*75}} >
            <View style={[styles.standingDeskLegTop, {left: 5}]}/>
            <View style={[styles.standingDeskLegTop, {right: 5}]}/>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row', backgroundColor: 'grey'}}>
            <View style={[styles.standingDeskLegBottom]}/>
            <View style={[styles.standingDeskLegBottom]}/>
          </View>
          <View>
            <Text> {pos*75} </Text>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={slideHandler}
            />
          </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
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
  table: {
    backgroundColor: 'blue', 
  },
  standingDeskLegTop: {
    width: 10,
    height: 75,
    backgroundColor: "pink",
  },
  standingDeskLegBottom: {
    width: 20,
    height: 75,
    backgroundColor: "pink",
  },
  tableButtons: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
});
