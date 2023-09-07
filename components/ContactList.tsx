import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ContactList = () => {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png',
          },
          {
            uid: 6,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png',
          },
          {
            uid: 7,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://w7.pngwing.com/pngs/203/674/png-transparent-black-and-blue-wolf-illustration-wolf-avatar-splash-animals-fictional-character-thumbnail.png',
          },
          {
            uid: 8,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
          },
      ];

      return(
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            {
                contacts.map(({uid, name, status, imageUrl}) => (
                    <ScrollView key={uid}>
                        <View style={styles.userCard}>
                            <Image
                                source={{
                                    uri: imageUrl
                                }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    </ScrollView>
                ))
            }
        </View>
      )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    card:{
        height: 340,
        borderRadius: 6,
        marginVertical: 5,
        marginHorizontal: 5
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
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#D3F6E0',
        padding: 8,
        borderRadius: 3,
        marginHorizontal: 15,
        borderWidth: .3
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#404040'
    },
    userStatus: {
        fontSize: 12,
        color: '#8D8D8D'
    }
})

export default ContactList