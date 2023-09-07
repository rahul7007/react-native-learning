import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BgColChanger = ():JSX.Element => {
    const [randomBacgroundColor, setRandomBacgroundColor] = useState('#ffffff')

    const generateColor = () => {
        const hexRange = "0123456789ABCDEF"
        let color = "#"

        for(let i=0; i<6; i++){
            color += hexRange[Math.floor(Math.random() * 16)]
        }

        setRandomBacgroundColor(color)
    }

    return (
        <>
        <StatusBar backgroundColor="blue"/>
        <View style={[ {flex:1, justifyContent:'center', alignItems:'center'}, {backgroundColor: randomBacgroundColor}] }>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
          </TouchableOpacity>
          
        </View>
        </>
        );
}

const styles = StyleSheet.create({
    // container:{
    //   flex:1,
    //   alignItems: "center",
    //   justifyContent: "center"
    // },
    actionBtn: {
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderWidth: 15
    },
    actionBtnTxt: {
      fontSize: 24,
      color: "#6A1B4D",
      textTransform: "uppercase"
    }
  });

export default BgColChanger