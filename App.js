import { StatusBar } from 'expo-status-bar';
import getUniqueId from './utils/getUniqueId';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Picker, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import WavyHeader from './components/WavyHeader';
import JobDetails from './components/JobDetails';
import MainDetails from './components/MainDetails';
export default function App() {

  const [jobs, setJobs] = React.useState({
    availableJobs: [{ jobId: getUniqueId(), pickUp: "W1T 3ER", dropOff: "E1 6LB", currentDistance: 36.5, earnings: 5, distance: 3, startOn: "today", vanSize: "medium", duration: 15, timeRange: [{ hour: 9, minute: 45, am: true }, { hour: 3, minute: 45, am: false }] }]
  });

  const [selectedValue, setSelectedValue] = React.useState("java");
  const onPressLearnMore = () => "hello"
  return (

    <View>
      <View>

        <WavyHeader customStyles={styles.svgCurve} />
        <Text style={{ position: "absolute", top: 60, left: "31%", fontSize: 20, fontWeight: 'bold', color: 'white' }}>Available Jobs</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>


        {jobs.availableJobs.map(job =>

          <View style={styles.jobTab}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: "bold", marginLeft: 10, marginRight: 10 }}>Job ID: {job.jobId}</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10, marginRight: 10 }}>Earnings: £{job.earnings}</Text>
            </View>
            <JobDetails job={job} />
            <MainDetails job={job} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.acceptButton}>
                <Text>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>)
        }

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 200
  },
  jobTab: {
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',

    margin: 2
  },
  sortJob: {
    color: '#88ff4d',
  },
  acceptButton: {
    borderRadius: 100,
    width: 120,
    height: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  header: {
    alignItems: 'center',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },

  jobIdText: {
    fontWeight: "bold"
  },
  jobContent: {
    marginLeft: 20,
    flexDirection: 'column'
  },
  buttonContainer: {
    alignItems: "center"
  },

});
