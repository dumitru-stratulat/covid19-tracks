import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SignupScreen = ({navigation}) => {
    return <>
        <View>
            <Text style={{fontSize: 48}}>SignupScreen</Text>
            <Button title="go to  signIn" onPress={()=>{navigation.navigate('Signin')}} />
            <Button title="go to  mainFlow" onPress={()=>{navigation.navigate('mainFlow')}} />
        </View>
    </>
}
const styles = StyleSheet.create({
    
})

export default SignupScreen
