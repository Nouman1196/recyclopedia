import React from 'react'
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Color from '../theme/Colors'
import Theme from '../theme/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import YellowButton from '../components/YellowButton';

const Help = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView>
                <View style={Theme.recyclopediaImageContainer}>
                    <Image style={Theme.recylopediaImage} source={require(assetsPath + 'RE3cycleopedia-LOGO-1080.jpg')} />
                </View>
                <View style={Theme.aboutAppDetailedContainer}>
                    <Text style={Theme.detailedHeadingTextCenter}>{'\n'}FOR HELP USING THIS APP{'\n'}</Text>
                    <Text style={Theme.detailedHeadingTextCenter}>Please contact re3 via the contact form{'\n'}</Text>
                    <YellowButton title={'USE CONTACT FORM'} navigation={navigation} screenTitle={'Contact Us'} link="https://re3.fccenvironment.co.uk/contact-us/" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Help