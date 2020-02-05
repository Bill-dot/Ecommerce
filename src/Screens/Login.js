import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, ImageBackground } from 'react-native'
import firebase from 'react-native-firebase'
import Card from '../Components/Card'
import CardSection from '../Components/CardSection'
import Head from '../Components/Head'
import Input from '../Components/Input'
import Button from '../Components/Button'
// import { Headers } from '../Components/Headers'

const Login = () => {
    const { state, setState } = useState({
        email: '',
        password: '',
        error: '',
        loading: false
    })
    const { container, image } = styles

    onButtonPress = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).
            then(onLoginSuccess.bind(this)).
            catch(
                () => {
                    firebase.auth().createUserWithEmailAndPassword(email, password).
                        then(onLoginSuccess.bind(this)).
                        catch(
                            onLoginFailure.bind(this)
                        )
                }
            )
    }

    onLoginSuccess = () => {
        setState({
            email: '',
            password: '',
            loading: false,
            error: ''
          });
    }

    onLoginFailure = () => {
        setState({ error: 'Authentication Failed', loading: false });
    }

    return (

        <ImageBackground source={require('../../assets/images/Image.jpg')} style={image} >
            <Head>FlipZon</Head>
            <Card>
                <CardSection>
                    <Input label='Email' onChangeText={(text) => setState({ emial: text })} placeholder='user@mail.com' secureTextEntry={false} />
                </CardSection>
                <CardSection>
                    <Input label='Password' onChangeText={(text) => setState({ password: text })} placeholder='password' secureTextEntry={true} />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {state.error}
                </Text>
                <Button onPress={onButtonPress}>LogIn</Button>
            </Card>
        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
        // borderWidth:1,
        // borderColor:'#538eed',
        margin: 5,
    },
    image: {
        height: 715,
        width: null,
        opacity: 0.8,
        flex: 1
    },errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
})

export default Login