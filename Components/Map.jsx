import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectOrigin, setOrigin } from '../Slices/Navslice'



const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
    style={tw`flex-1`}
    mapType='standard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  />
  )
}

export default Map

const styles = StyleSheet.create({})