import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Color from '../theme/Colors'
import Theme from '../theme/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons';

const YellowButton = ({ navigation, title, screenTitle, link }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WebViews', { title: screenTitle, link: link })} style={Theme.yellowButtonContainer}>
            <Text style={Theme.yellowButtonTitle}>{title}</Text>
            <Ionicons name='ios-arrow-forward' color={Color.white} size={22} />
        </TouchableOpacity>
    )
}

export default YellowButton