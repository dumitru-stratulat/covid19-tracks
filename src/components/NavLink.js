import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({navigation,text,routeName}) => {
    return (
        <View>
            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                    <Text style={styles.link}>{text}</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    )
}
const styles = StyleSheet.create({
})

export default withNavigation(NavLink)
