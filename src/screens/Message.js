import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Theme from '../theme/Theme'

const Messages = () => {
    return (
        <SafeAreaView style={Theme.container}>
            <Text style={Theme.noMessagesText}>No Messages Found!</Text>
        </SafeAreaView>
    )
}

export default Messages