import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button title="go to TrackDetail" onPress={()=>navigation.navigate('TrackDetail')}/>
        </>
    )
}

export default TrackListScreen
