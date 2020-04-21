import React,{useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context} from '../context/AuthContext'


const SigninScreen = () => {
    const { state,signin,clearErrorMessage } = useContext(Context)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In to you account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink 
            text="Dont Have an Account? Sign Up"
            routeName="Signup"
             />
        </View>
    )
}

SigninScreen.navigationOptions  = () =>{
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
})

export default SigninScreen
