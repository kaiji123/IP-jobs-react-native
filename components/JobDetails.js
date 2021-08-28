import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function JobDetails({ job }) {

    return (
        <View style={styles.jobContent}>

            <View style={{ flexDirection: 'row' }} >
                <View style={styles.icons}>
                    <Icon name="calendar"
                        size={20}
                        color="#88ff4d" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.iconText}>Start on: </Text>
                    <Text style={styles.iconTextDetail}>{job.startOn} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <View style={styles.icons}>
                    <Ionicon name="time-outline"
                        size={20}
                        color="#88ff4d" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.iconText}>Time range: </Text>
                    <Text style={styles.iconTextDetail}>{job.timeRange[0].hour}:{job.timeRange[0].minute} {job.timeRange[0].am ? "am" : "pm"} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <View style={styles.icons}>
                    <Icon name="map-marker" size={20} color="#88ff4d" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.iconText}>Pick Up: </Text>
                    <Text style={styles.iconTextDetail}>{job.pickUp} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <View style={styles.icons}>
                    <Icon name="map-marker" size={20} color="#88ff4d" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.iconText}>Drop Off: </Text>
                    <Text style={styles.iconTextDetail}>{job.dropOff} </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <View style={styles.icons}>
                    <MaterialIcon name="map-marker-distance" size={20} color="#88ff4d" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.iconText}>Current Distance: </Text>
                    <Text style={styles.iconTextDetail}>{job.currentDistance} miles</Text>
                </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({

    iconText: {
        color: "#00BFFF",
        marginTop: 5,
        marginBottom: 10,
        fontSize: 10,
        height: 10,
        fontWeight: "bold",
        fontSize: 12
    },

    jobContent: {
        marginLeft: 20,
        flexDirection: 'column'
    },
    icons: {

        width: 20,
    },
    iconTextDetail: {
        color: "black",
        marginTop: 5,
        marginBottom: 10,
        fontSize: 10,
        height: 10,
        fontWeight: "bold",
        fontSize: 12
    }

});
