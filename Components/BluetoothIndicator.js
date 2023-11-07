import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const BluetoothConnected = require('../assets/BluetoothConnected.png');
const BluetoothDisconnected = require('../assets/BluetoothDisconnected.png');


export default function Bluetooth() {
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={isBluetoothEnabled ? BluetoothConnected : BluetoothDisconnected}
        style={styles.bluetoothIndicatorImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
  },
  bluetoothIndicatorImage: {
    width: 50,
    height: 25,
  },
});
