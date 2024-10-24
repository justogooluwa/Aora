import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"
import CustomButton from '../components/CustomButton'

const Index = () => {
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{height:'100%'}}>
     <View style={styles.view}>
    <Image
    source={images.logo}
    style={styles.image}
    resizeMode='contain'/>

    <Image
    source={images.cards}
    style={styles.card}
    resizeMode='contain'/>

    <View style={styles.view2}>
        <Text style={styles.text}>Discover Endless Possibilities with{''}<Text style={styles.aora}>Aora</Text>
        </Text>

        <Image
        source={images.path}
        style={styles.path}
        resizeMode='contain'/>
     </View>
     <Text style={styles.text2}>Where creativity meets innovation: 
        embark on a journey with limitless exploration
        with Aora
     </Text>

     <CustomButton
     title='Continue With Email'
     handlePress={()=> router.push('/sign-in')}
     containerStyles={{width:'100%', marginTop:28}}/>
     </View>
    </ScrollView>

    <StatusBar backgroundColor='#161622' style='light'/>
   </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#161622',
        height:'100%'
    },
    view:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: 16,
        paddingRight:16,
    },
    image:{
      width:130,
      height:84,
    },
    card:{
      maxWidth: 380,
      width:'100%',
      height:300
    },
    view2:{
     position:'relative',
     marginTop:1,
    },
    text:{
        fontSize:32,
        color:'white',
        textAlign:"center",
        fontWeight:'700'
    },
    aora:{
        color:'#FFA300'
    },
    path:{
        width:116,
        height:15,
        position:'absolute',
        bottom:-4,
        right:-28
    },
    text2:{
      color:'#CDCDE0',
      textAlign:'center',
      fontSize:16,
      marginTop:20,
      fontFamily:'Poppins-Regular'
    }
})