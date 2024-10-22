import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> {props.title}</Text>
            <Text style={styles.cardContent}> {props.content} </Text>
            <Button title={props.buttonText} onPress={props.onPress} />
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff3542',
        borderRadius: 10,
        padding: 25,
        margin: 15,
        marginTop: 12,
        elevation: 3, // Sombra para Android
        shadowColor: '#00',// Sombra para IOS
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

    },

    cardTitle: {
        fontSize: 20,

        fontWeight: 'bold',
        marginBottom: 5
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: "left"


    }


})
