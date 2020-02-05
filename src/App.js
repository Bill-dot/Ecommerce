import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import firebase from 'react-native-firebase'
import Login from './Screens/Login'

export default class App extends Component{

    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: "AIzaSyDUqofCTIsivwiddNmQI0XA44uGqxMd9S4",
                authDomain: "authentication-36261.firebaseapp.com",
                databaseURL: "https://authentication-36261.firebaseio.com",
                projectId: "authentication-36261",
                storageBucket: "authentication-36261.appspot.com",
                messagingSenderId: "551144758944",
                appId: "1:551144758944:web:91ddff6caef8510c6173c5",
                measurementId: "G-XTP7D08RBB"
              }
        )
    }

    render(){
        return(
            <Login>
                <App/>
            </Login>
        )
    }
}
