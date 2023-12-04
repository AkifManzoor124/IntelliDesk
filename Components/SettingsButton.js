import { StyleSheet, Text, View, Image, } from 'react-native';

const ArrowIcon = require('../assets/ArrowIcon.png');


export default function SettingsButton( {title, text, source} ) {
    return(
        <View style={styles.SettingButton}>
            <View style={styles.Group1}>
                <View style={styles.iconContainer}>
                    <Image source={source} style={styles.usernameIcon}/>
                </View>
                <View>
                    <Text style={styles.SettingsText}>{text}</Text>
                </View>
            </View>
            <View style={styles.iconContainer1}>
                <Image source={ArrowIcon} style={styles.ArrowIcon}/>
         
            </View>
        </View>
    );
}

//group image and text as one component
//marginLeft for the group
//marginRight for the View for the Arrow
//Adding justifyContent to SettingsButton

const styles = StyleSheet.create({
    SettingButton:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    SettingsText: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginLeft: 15,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35, //changed to a bigger width 
        borderRadius: 40, //make sure it is perfect circle
        backgroundColor: '#F6F6F6',
        marginLeft: 10, //make this slightly further
        height: 35,
    },
    usernameIcon: {
        width: 15,
        height: 25,
    },
    Group1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    ArrowIcon :{
        width: 15,
        height: 25,
        
    },
    iconContainer1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40, //changed to a bigger width 
        marginLeft: 10, //make this slightly further
        marginRight: 20,
    }
});