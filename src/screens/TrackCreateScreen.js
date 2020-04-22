// import '../_mockLocation'
import React,{useEffect,useState, useContext,useCallback} from 'react'
import { SafeAreaView,withNavigationFocus } from 'react-navigation'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'
import {Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({isFocused}) => {
    const { state:{recording},addLocation } = useContext(LocationContext)
    const callback = useCallback(location=>{
        addLocation(location,recording)
    },[recording])
    const [err] = useLocation(isFocused || recording,callback)

    return (
        <SafeAreaView>
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err ? <Text>Enable location services.</Text>: null}
            <TrackForm/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    
})

export default withNavigationFocus(TrackCreateScreen)
