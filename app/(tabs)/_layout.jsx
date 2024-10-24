import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({icon, color, name, focused})=>{
    return(
        <View style={styles.view}>
            <Image
            source={icon}
            resizeMode='conatin'
             tintColor={color}
             style={styles.images}
             />
             <Text style={styles.text}>
                {name}
             </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84
        }
        
    }}>
        <Tabs.Screen
        name='home'
        options={{
            title:'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) =>(
           <TabIcon
          icon={icons.home}
          color={color}
          name='Home'
          focused={focused} />
            )
        }}/>
        <Tabs.Screen
        name='bookmark'
        options={{
            title:'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused}) =>(
           <TabIcon
          icon={icons.bookmark}
          color={color}
          name='Bookmark'
          focused={focused} />
            )
        }}/>
        <Tabs.Screen
        name='create'
        options={{
            title:'Create',
            headerShown: false,
            tabBarIcon: ({color, focused}) =>(
           <TabIcon
          icon={icons.plus}
          color={color}
          name='Create'
          focused={focused} />
            )
        }}/>
        <Tabs.Screen
        name='profile'
        options={{
            title:'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) =>(
           <TabIcon
          icon={icons.profile}
          color={color}
          name='Profile'
          focused={focused} />
            )
        }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
    images:{
        height:24,
        width:24
    },
    text:{
    fontFamily: 'Poppins-SemiBold',
    color:'white'
    },
    view:{
     justifyContent:'center',
     alignItems: 'center',
     gap:2
    }
})