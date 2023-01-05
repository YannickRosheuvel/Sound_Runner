// import { StyleSheet, Text, Image, SafeAreaView, TextInput, View } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
// import { Audio } from 'expo-av'
// import React, { useState, useEffect } from 'react';

// export default function SoundPlayer() {


// // await componentDidMount() {
// // Audio.setAudioModeAsync({
// //     allowsRecordingIOS: false,
// //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX_,
// //     playsInSilentModeIOS: true,
// // })
// // }

// useEffect(() => {
//     Audio.setAudioModeAsync({
//         allowsRecordingIOS: false,
//         interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX_,
//         playsInSilentModeIOS: true,
//     })
//   });



// this.sound = new Audio.Sound()

// const status = {
//     shouldPlay:false
// }



// playSound = () => {
//     this.Sound.playAsync();
//   };

// this.sound.loadAsync(require('../assets/Sounds/Heartbeat_Loop.wav'))

// return (
//     <View style={styles.box}>
// <Button
//     title="Play Sound"
//     onPress={this.playSound.bind(this)}/>

//     </View>
// )
// }

// const styles = StyleSheet.create(HomeStyles);


import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function SoundPlayer() {


  const [sound, setSound] = React.useState();

  const status = {
    playing1:false
}

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/Sounds/Heartbeat_Loop.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    sound.setIsLoopingAsync(true);
    // if (sound.didJustFinish) {
    //     await sound.replayAsync();
    // }
  }



//   const N = 20;

//   const _onPlaybackStatusUpdate = (playbackStatus) => {
//     if (playbackStatus.didJustFinish) {
//       if (this.state.numberOfLoops == N - 1) {
//         this.sound.setIsLooping(false);
//       }
//       this.setState({ numberOfLoops: this.state.numberOfLoops + 1 });
//     }
//   };

//   this.setState({ numberOfLoops: 0 });
// // Load the playbackObject and obtain the reference.
// this.sound.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
// this.sound.setIsLooping(true);

//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);


  const { sound: playbackObject } = Audio.Sound.createAsync(
    { uri: '../assets/Sounds/Heartbeat_Loop.wav' },
    { shouldPlay: true }
  );


//   const N = 20;

  
//   const _onPlaybackStatusUpdate = (playbackStatus) => {
//     if (playbackStatus.didJustFinish) {
//       if (numberOfLoops == N - 1) {
//         playbackObject.setIsLooping(false);
//       }
//       setNumberOfLoops(numberOfLoops + 1);
//     }
//   };
  

//     const [numberOfLoops, setNumberOfLoops] = React.useState(0);
//   // Load the playbackObject and obtain the reference.

//   playbackObject.setIsLooping(true);

//  const playSounds = async () => {
//     await playbackObject.setVolumeAsync(inputSound.volume ?? 0.5)
//     await playbackObject.setIsLoopingAsync(true)
//     return playbackObject
// }

// export const createSound = async (inputSound) => {
//     const {sound} = await Audio.Sound.createAsync({uri: inputSound.sound})
//     await sound.setVolumeAsync(inputSound.volume ?? 0.5)
//     await sound.setIsLoopingAsync(true)
//     return sound
// }



  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create(HomeStyles);

