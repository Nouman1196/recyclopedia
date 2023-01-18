import React from 'react'
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'

const AboutApp = () => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView>
                <View style={Theme.recyclopediaImageContainer}>
                    <Image style={Theme.recylopediaImage} source={require(assetsPath + 'RE3cycleopedia-LOGO-1080.jpg')} />
                </View>
                <View style={Theme.aboutAppDetailedContainer}>
                    <Text style={Theme.detailedHeadingText}>About this app</Text>
                    <Text style={Theme.detailedText} >
                        re3cyclopeida is the public facing brand of the re3, a waste
                        management partnership between Bracknell Forest, Reading and Wokingham
                        Borough Councils. We aim to inspire and encourage residents of re3
                        Councils to manage their waste responsibly, helping residents to see
                        the value of waste and the real benefits that can be achieved by
                        wasting less and recycling right.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutApp