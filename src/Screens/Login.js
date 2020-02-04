import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ImageBackground } from 'react-native'
import Card from '../Components/Card'
import CardSection from '../Components/CardSection'
import Head from '../Components/Head'
import Input from '../Components/Input'
import Button from '../Components/Button'
// import { Headers } from '../Components/Headers'

const Login = () => {

    const { container, image } = styles


    return (

        <ImageBackground source={require('../../assets/images/Image.jpg')} style={image} >
            <Head>FlipZon</Head>
            <Card>
                <CardSection>
                    <Input label='Email'  onChangeText={null} placeholder='user@mail.com' secureTextEntry={false} />
                </CardSection>
                <CardSection>
                    <Input label='Password'  onChangeText={null} placeholder='Password' secureTextEntry={true} />
                </CardSection>
                <Button onPress={null}>LogIn</Button>
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
        opacity: 0.5,
        flex: 1
    }
})

export default Login