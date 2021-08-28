import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function MainDetails({ job }) {

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: 1 }}>
            <View style={styles.mainDetails}>
                <Text style={styles.mainDetail}>Distance:</Text>
                <Text>{job.distance} miles</Text>
            </View>
            <View style={styles.mainDetails}>
                <Text style={styles.mainDetail}>Van Size:</Text>
                <Text>{job.vanSize}</Text>
            </View>
            <View style={styles.mainDetails}>
                <Text style={styles.mainDetail}>Duration:</Text>
                <Text>{job.duration} minutes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    mainDetails: {

        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column"
    },
    mainDetail: {
        color: "#00BFFF",
        fontWeight: "bold"
    }
});
