import React from 'react'
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Color from '../theme/Colors'
import Theme from '../theme/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import YellowButton from '../components/YellowButton';

const HowToUse = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView>
                <View style={Theme.recyclopediaImageContainer}>
                    <Image style={Theme.recylopediaImage} source={require(assetsPath + 'RE3cycleopedia-LOGO-1080.jpg')} />
                </View>
                <View style={Theme.aboutAppDetailedContainer}>
                    <Text style={Theme.detailedHeadingTextCenter}>HOW TO USE THE SEARCH TOOL</Text>
                    <Text style={Theme.detailedText} >
                        Simply enter your postcode and start typing for the item you are
                        looking to recycle, click the ‘Look it up!’ button and the tool will
                        show you which bin at home to put it in, show you a nearby recycling
                        location and give you any relevant information to help with recycling
                        your item.
                        {'\n'}
                    </Text>
                    <Text style={Theme.detailedHeadingTextCenter}>FOR HELP USING THIS APP</Text>
                    <Text style={Theme.detailedText} >
                        Please contact re3 via the contact form
                    </Text>
                    <YellowButton title={'USE CONTACT FORM'} navigation={navigation} screenTitle={'Contact Us'} link="https://re3.fccenvironment.co.uk/contact-us/" />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HowToUse