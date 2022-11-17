import { StatusBar } from 'react-native';

export const HomeStyles = {

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    hello: {
        fontSize: 24,
        position: 'absolute',
        top: 30,
        left: 20,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#8F8F8F'
    },
    input: {
        outlineStyle: 'none',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        fontSize: 24,
        position: 'absolute',
        top: 30,
        left: 90,
        width: 190
    },
    avatar: {
        top: 13,
        right: 19,
        width: 70,
        height: 70,
        position: 'absolute'
    },
    box: {
        width: '90%',
        backgroundColor: '#B0B0B0',
        height: 211,
        borderRadius: 30,
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 100,
        position: 'absolute'
    },
    backgroundBox: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    level: {
        fontSize: 96,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#fff'
    },
    progress: {
        fontSize: 24,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
    },
    exercises: {
        fontSize: 36,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        position: 'absolute',
        left: 19,
        top: 350
    },
    cardList: {
        width: '90%',
        flex: 1,
        gap: 20,
        position: 'relative',
        top: 400,
    },
    card: {
        width: '100%',
        height: 120,
        borderRadius: 30,
        backgroundColor: "#B0B0B0"
    },
    touch: {
        borderRadius: 30
    }
}