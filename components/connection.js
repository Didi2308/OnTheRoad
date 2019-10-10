import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default class Connection extends React.Component {

    
    render() {
        return(
        <View style={{ marginTop: 150, backgroundColor: '#C5FFF7' }} >
        <TextInput placeholder='Adresse Mail'/>
        <TextInput placeholder='Mot de passe'/>
        <Button title='Se connecter' onPress={() => {}}/>
        </View>
        )
    }


}

const styles = {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      }
}