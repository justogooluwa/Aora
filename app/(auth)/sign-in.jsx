import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const submit = ()=>{

  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
       <Image
       source={images.logo}
       style={styles.images}
       resizeMode='contain'
       />
       <Text style={styles.text}>Log In to Aora</Text>

       <FormField
       title='Email'
       value={form.email}
       handleChangeText={(e)=> setForm({...form, email:e})}
       otherStyles={{marginTop:28}}
       keyboardType='email-address'/>

       <FormField
       title='Password'
       value={form.password}
       handleChangeText={(e)=> setForm({...form, password:e})}
       otherStyles={{marginTop:28}}/> 

       <CustomButton
       title='Sign In'
       handlePress={submit}
       containerStyles={{marginTop:7}}/>

       <View style={styles.view2}>
        <Text style={styles.text2}>
          Don't have an account?
        </Text>
        <Link href='/sign-up' style={styles.link}>Sign Up</Link>
       </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#161622',
    height:'100%'
  },
  view:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    paddingLeft:16,
    paddingRight:16,
    marginTop:24,
    marginBottom:24
  },
  images:{
    width:115,
    height:35
  },
  text:{
    color:'white',
    fontSize:24,
    fontFamily:'Poppins-SemiBold',
    marginTop:30
  },
  view2:{
    justifyContent:'center',
    paddingTop:20,
    flexDirection:'row',
    gap:2
  },
  text2:{
    fontSize:18,
    color:'#CDCDE0',
    fontFamily:'Poppins-Regular'
  },
  link:{
    fontSize:18,
    fontFamily:'Poppins-SemiBold',
    color:'#FFA300'
  }
})