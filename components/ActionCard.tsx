import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

const ActionCard = (): JSX.Element => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
    return(
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={[styles.headingContainer]}>
                    <Text style={styles.headerText}>What's new in JavaScript 21 - ES12</Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                    }}
                    style={styles.cardImage}
                />
                <View style={[styles.cardBody]}>
                    <Text numberOfLines={3}>
                        Just like every year, Javascript brings in new features. This year javascript is bringing 
                        4 new features, which are almost in production rollout. I won't be wasting much more time 
                        and directly jump to code with easy to understand examples. Once the compatible node 
                        version is available, simply create a new JS file, and let's get started. In case you 
                        prefer to watch video and use code examples below, here is a video for you.
                    </Text>
                </View>
                <View style={[styles.cardFooter]}>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/components-and-apis')}>
                        <Text style={styles.cardButton}>READ MORE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/components-and-apis')}>
                        <Text style={styles.cardButton}>LIKE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card:{
        // height: 340,
        borderRadius: 6,
        marginVertical: 15,
        marginHorizontal: 5,
    },
    cardElevated:{
        backgroundColor: '#dbad42',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    headingContainer: {
        padding: 8,
        flexDirection:'row',
        justifyContent: 'center'
    },
    headerText: {
        color:'#000000',
        fontSize: 16
    },
    cardImage:{
        height: 200
    },
    cardBody:{
        padding: 8
    },
    cardFooter:{
        // flex: 1,
        paddingVertical: 8,
        // paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    cardButton:{
        backgroundColor:'#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 3
    }
})

export default ActionCard