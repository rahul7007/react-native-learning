import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const FancyCard = (): JSX.Element => {
    return(
        <View>
            <Text style={styles.headingText}>Tranding Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://i.pinimg.com/564x/92/70/9b/92709b0c0acbe201f3aa135bd36823ef.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={[styles.cardBody]}>
                    <Text style={styles.cardTitle}>Tajmahal</Text>
                    <Text style={styles.cardLabel}>Agra, New Dehli</Text>
                    <Text style={styles.cardDescription}>
                        Beautiful Taj Mahal (India) High Definition HD Wallpapers.. Taj Mahal Wallpapers and Backgrounds and download them on all your devices, Computer, Smartphone, Tablet
                    </Text>
                    <Text style={styles.cardFooter}>12 minutes away</Text>
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
        // // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 5
    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        fontSize:22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        fontSize:14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize:12,
        marginBottom: 12,
        marginTop: 6
    },
    cardFooter: {}
})

export default FancyCard