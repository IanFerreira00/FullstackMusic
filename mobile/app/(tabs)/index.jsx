import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native'


const splashScreen = () =>{
    const router = useRouter()
    useEffect(() =>{
        const timer = setTimeout(() =>{
            router.push('/perfil')
        }, 2500)
        return() => clearTimeout(timer)
    }, [])
    
    return(
        <View style={styles.container}>
            <Image style={styles.image}
            source={require('../../assets/images/logo.png')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:'350px',
        height:'350px'

    }

})
export default splashScreen