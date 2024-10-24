import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    style={[styles.container, containerStyles]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFA300',
        borderRadius:16,
        minHeight:62,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      color:'#161622',
      fontFamily:'Poppins-SemiBold',
      fontSize:18
    }
})