// import React, { useEffect, useState } from "react";

// import { StatusBar } from "expo-status-bar";

// import {

//  StyleSheet,

//  Text,

//  View,

//  ImageBackground,

//  Dimensions,

// } from "react-native";

// import { Pedometer } from "expo-sensors";

// import CircularProgress from "react-native-circular-progress-indicator";

 

// export default function counter() {

//  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");

//  const [StepCount, SetStepCount] = useState(0);

 

//  var WindowHeight = Dimensions.get("window").height;

 

//  var Dist = StepCount / 1300;

//  var DistanceCovered = Dist.toFixed(4);

 

//  var cal = DistanceCovered * 60;

//  var caloriesBurnt = cal.toFixed(4);

//  React.useEffect(() => {

//    subscribe();

//  }, []);

 

//  subscribe = () => {

//    const subscription = Pedometer.watchStepCount((result) => {

//      SetStepCount(result.steps);

//    });

 

//    Pedometer.isAvailableAsync().then(

//      (result) => {

//        SetPedomaterAvailability(String(result));

//      },

//      (error) => {

//        SetPedomaterAvailability(error);

//      }

//    );

//  };

 

//  return (

//    <View style={stylez.container}>




//        <View style={{ flex: 1, justifyContent: "center" }}>

//          <Text style={styles.headingDesign}>

//            Is Pedometer available on the device : {PedomaterAvailability}

//          </Text>

//        </View>

//        <View style={{ flex: 3 }}>

//          <CircularProgress

//            value={StepCount}

//            maxValue={6500}

//            radius={210}

//            textColor={"#ecf0f1"}

//            activeStrokeColor={"#f39c12"}

//            inActiveStrokeColor={"#9b59b6"}

//            inActiveStrokeOpacity={0.5}

//            inActiveStrokeWidth={40}

//            activeStrokeWidth={40}

//            title={"Step Count"}

//            titleColor={"#ecf0f1"}

//            titleStyle={{ fontWeight: "bold" }}

//          />

//        </View>

 

//        <View style={{ flex: 1, justifyContent: "center" }}>

//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                styles.textDesign,

//                { paddingLeft: 20, marginLeft: '23%' },

//              ]}

//            >

//              Target : 6500 steps(5kms)

//            </Text>

//          </View>

 

//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                stylez.textDesign,

//                { width: "93%", paddingLeft: 20, marginLeft: '-3.5%' },

//              ]}

//            >

//              Distance Covered : {DistanceCovered} km

//            </Text>

//          </View>

 

//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                stylez.textDesign,

//                {  paddingLeft: 10, marginLeft: '23%' },

//              ]}

//            >

//              Calories Burnt : {caloriesBurnt}

//            </Text>

//          </View>

 

//          <StatusBar style="auto" />

//        </View>



//    </View>

//  );

// }

 

// const stylez = StyleSheet.create({

//  container: {

//    flex: 1,

//    backgroundColor: "#fff",

//  },

//  headingDesign: {

//    backgroundColor: "rgba(155, 89, 182,0.5)",

 

//    alignSelf: "center",

//    fontSize: 20,

//    color: "white",

//    fontWeight: "bold",

//    fontFamily: "Papyrus",

//  },

//  textDesign: {

//    backgroundColor: "rgba(155, 89, 182,0.5)",

//    height: 50,

//    width : '85%',

//    borderColor: "white",

//    borderWidth: 1,

//    borderRadius: 20,

//    overflow: "hidden",

//    fontSize: 25,

//    color: "white",

//    fontWeight: "bold",

//    fontFamily: "Papyrus",

//   },
// });

import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight } from 'react-native';
import arrow from '../assets/icons/Arrow.svg'
import backgroundWork from '../assets/images/backgroundWork.svg'
import avatar from '../assets/images/avatar.svg'
import replay from '../assets/icons/replay.svg'
import { WorkStyle } from '../assets/styles/WorkStyle';
import { useState } from 'react';



export default function counter({ navigation }) {

    let [time, setTime] = useState(30)

    const NavigateHome = () => {
        navigation.navigate('Home')
    }

    if (time == 0) {
        clearTimeout()
    } else {
        setTimeout(() => {
            setTime(time - 1)
        }, 1000)
    }

    const replayTimer = () => {
        if (time == 0) {
            setTimeout(() => {
                setTime(time = 30)
            })
        } else {
            clearTimeout(time = 31)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight onPress={NavigateHome} style={styles.touchArrow}>
                <Image style={styles.arrow} source={arrow} />
            </TouchableHighlight>
            {/* <Image style={styles.avatar} source={avatar} /> */}
            <Text style={styles.title}>Run</Text>
            <Text style={styles.task}>Task 100m</Text>
            <Text style={styles.timer} onChange={setTime}>{time}s</Text>
            <TouchableHighlight onPress={replayTimer} style={styles.touchPlay}>
                <Image style={styles.replay} source={replay} />
            </TouchableHighlight>
            {/* <Image style={styles.backgroundWork} source={backgroundWork} /> */}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create(WorkStyle);
