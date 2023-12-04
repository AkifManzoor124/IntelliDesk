import React, { StyleSheet, Text, View, Image } from 'react-native';

import SettingsButton from './SettingsButton';

const UsernameIcon = require('../assets/Username.png');
const PhoneNumberIcon = require('../assets/PhoneNumberIcon.png');
const EmailIcon = require('../assets/EmailIcon.png');
const PasswordIcon = require('../assets/PasswordIcon.png');
const LegalInformationIcon = require('../assets/LegalInformationIcon.png');
const DeactivateIcon = require('../assets/DeactivateIcon.png');
const SetupGuideIcon = require('../assets/SetupGuideIcon.png');
const SoftwareInformationIcon = require('../assets/SoftwareInformationIcon.png');
const FirmwareInformationIcon = require('../assets/FirmwareInformationIcon.png');

export default function Settings () {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Settings}>Settings</Text>
        <Text style={styles.AccountInformation}>Account Information</Text>
      </View>

      <View style={styles.body}>

        <View style={styles.UpperContents}>
          <Text style={styles.LoginandSecurityText}>Login and Information</Text>

          <SettingsButton
            title="name"
            text="Name"
            source={UsernameIcon}
          />

          <SettingsButton
            title="phonenumber"
            text="Phone Number"
            source={PhoneNumberIcon}
          />

          <SettingsButton
            title="email"
            text="Email"
            source={EmailIcon}
          />

          {/* Create components from SettingsButton for the remaining */}

          <SettingsButton
            title="password"
            text="Password"
            source={PasswordIcon}
          />

        <View style={styles.LowerContents}>

          <View>
            <Text style={styles.SystemInformation}>System Information</Text>
            </View>
          </View>

          <SettingsButton
              title="setupguide"
              text="Setup Guide"
              source={SetupGuideIcon}
          />

          <SettingsButton
            title="legalinformation"
            text="Legal Information"
            source={LegalInformationIcon}
          />

          <SettingsButton
            title="softwareinformation"
            text="Software Information"
            source={SoftwareInformationIcon}
          />

            <SettingsButton
            title="firmwareinformation"
            text="Firmware Information"
            source={FirmwareInformationIcon}
          />

            </View>
          </View>

          <View style={styles.Deactivate}>
            <View style={styles.DeactivateIcon}>
              <Image source={DeactivateIcon} style={styles.DeactivateIcon}/>
            </View>
            <View>
              <Text style={styles.DeactivateText}>Deactivate</Text>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    columnGap: 100,
  },
  header: {
    backgroundColor: 'rgb(76,115,128)',
    borderRadius: 5,
    paddingVertical: 20,
    paddingTop: 90,
    alignItems: 'flex-start',
  },
  Settings: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    includeFontPadding: false,
    marginLeft: 15,
  },
  AccountInformation: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
    includeFontPadding: false,
    marginTop: 5,
    marginLeft: 16,
  },
  body: {
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: 20,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 10,
    height: 450,
  },
  LoginandSecurityText: {
    width: '90%',
    color: 'grey',
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 15,
    paddingVertical: 5,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
  UpperContents: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  LowerContents: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  SystemInformation: {
    width: '90%',
    color: 'grey',
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 15,
    paddingVertical: 5,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
  Deactivate: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 30,
    width: '90%',
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  DeactivateText: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 30,
  },
  DeactivateIcon: {
    width: 20,
    height: 25,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
  },
});
