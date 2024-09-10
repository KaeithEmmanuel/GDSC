import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function SrartNewTripCard() {
  const router=useRouter()
  return (
    <View style={{padding:25,marginTop:50,display:'flex',alignItems:'center',gap:25}}>
      <Entypo name="location-pin" size={35} color="black" />
      <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>
        No Trips Planned Yet
      </Text>
      <Text style={{fontSize:25,fontFamily:'outfit',textAlign:'center',color:Colors.GRAY}}>
        Looks like its time to plan a new ttravel experience! Get Started below 
      </Text>
      <TouchableOpacity
      onPress={()=>router.push('/create-trip/search-place')}
      style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15,paddingHorizontal:30}}
      >
        <Text style={{color:Colors.WHITE,fontFamily:'outfit-medium',fontSize:17}}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}