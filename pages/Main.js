import { StyleSheet, Text, Image, SafeAreaView, View, TextInput, handleInputChange, TouchableOpacity, handleSubmit, Linking , onPress} from 'react-native';
import { MainStyles } from '../assets/styles/MainStyle';
import React, { useContext, useState } from "react";
import backgroundImage from '../assets/images/BackgroundMain.svg';
import axios from 'axios';




// export default function Main({ navigation }) {
const Main = ({ navigation }) => {

    // let [time, setTime] = useState(60)
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courseCount, setCourseCount] = useState(0);
    const [emailadress, setEmailadress] = useState('');
    const [password, setPassword] = useState('');


    const NavigateHome = () => {
        navigation.navigate('Home')
    }

    const NavigationRegister = () => {
        navigation.navigate('RegisterScreen')
    }


    const Navregister = () => {
        navigation.navigate('Register')
    }


    async function handleSubmit(){
        // event.preventDefault();
        console.log("hello")
        axios.post('https://localhost:44355/api/user/{id}/login', { emailadress: emailadress, password: password})
            .then(response => {
                if (response.data.id !== 0) {
                    localStorage.setItem('user', response.data.id);
                    alert("Login succesfull!")
                    this.props.history.push('./')
                    NavigateHome();
                }
                else {
                    alert("login failed, please try again.")
                }
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // async function handleInputChange(variable) {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    //     if()
    //     console.log(event.target.value)
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            {/* <Image style={styles.background} source={backgroundImage} /> */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email address</Text>
                <TextInput
                    testID="email"
                    keyboardType="email-address"
                    onChangeText={newEmail => setEmailadress(newEmail)}
                    name="emailadress"
                    style={styles.input}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setPassword(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.hint}>We'll never share your email with anyone else.</Text>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={Navregister}
                    style={styles.registerButton}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.registerButton}
                >
                    <Text style={styles.registerButtonText} onPress={Navregister}>Register</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    testID="loginButton"
                    onPress={Navregister()}
                    style={styles.registerButton}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
}





const styles = StyleSheet.create(MainStyles);

export default Main;