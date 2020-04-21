import React,{  useContext,useEffect } from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import { Text, Input, Button} from  'react-native-elements'
import Spacer from '../components/Spacer'
import SigninScreen from './SigninScreen';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
    const {state,signup,clearErrorMessage} = useContext(AuthContext)


    return <View  style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign Up"
            errorMessage={state.errorMessage}
            submitButtonText="Sign up"
            onSubmit={signup}
        />

        <NavLink
            routeName="Signin"
            text="Already have an account? Sign In"
        />
    </View>
}
SignupScreen.navigationOptions  = () =>{
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
    },
    link:{
        color: 'blue'
    }
})

export default SignupScreen
