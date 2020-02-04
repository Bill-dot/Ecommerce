import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Login from './Screens/Login'

export default class App extends Component{
    render(){
        return(
            <Login>
                <App/>
            </Login>
        )
    }
}
