import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import icons from "../constants/icons"
import { TouchableOpacity } from 'react-native'


const FormField = ({title,value,placeholder,handleChangeText,otherStyles}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View style={[styles.view, otherStyles]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.view2}>
        <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
        secureTextEntry={title==='Password' && !showPassword}/>

        {title==='Password' && (
            <TouchableOpacity onPress={()=>
                setShowPassword(!showPassword)}>
                    <Image
                    style={styles.password}
                    source={!showPassword ? icons.eye :icons.eyeHide}/>
                    </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    view:{
        marginBottom:8
    },
    text:{
        fontSize:16,
        color:'#CDCDE0',
        fontFamily:'Poppins-Medium'
    },
    view2:{
       borderWidth:2,
       backgroundColor:'#1E1E2D',
       height:64,
       width:'100%',
       paddingLeft:16,
       paddingRight:16,
       borderColor:'#FF9C01',
       borderRadius:16,
       alignItems:'center',
       flexDirection:'row'
    },
    input:{
        flex:1,
        color:'white',
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
    },
    password:{
        height:24,
        width:24
    }
})