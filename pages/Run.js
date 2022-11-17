import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight } from 'react-native';
import arrow from '../assets/icons/Arrow.svg'
import backgroundWork from '../assets/images/backgroundWork.svg'
import avatar from '../assets/images/avatar.svg'
import replay from '../assets/icons/replay.svg'
import { WorkStyle } from '../assets/styles/WorkStyle';
import { useState } from 'react';



export default function Run({ navigation }) {

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
