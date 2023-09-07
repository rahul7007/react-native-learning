import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme
} from 'react-native';

const FirstComp = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    }
})

export default FirstComp