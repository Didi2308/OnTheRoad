import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'

export default class Connection extends React.Component {


    render() {
        return(
        <View style={styles.view} >
        <TextInput style={styles.textinput} placeholder='Adresse Mail'/>
        <TextInput style={styles.textinput} placeholder='Mot de passe'/>
        <Button style={styles.button} title='Se connecter' onPress={() => {}}/>
        <Text> Pas encore inscrit ? Cliquez ici !</Text>
        </View>
        )
    }


}

const styles = {

    view: {
        flex: 1,
        backgroundColor: '#C5FFF7',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 40,
        height: 50,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 25,
        backgroundColor: 'white'
      },

    button: {
        backgroundColor: '#FFA261'
    }
}