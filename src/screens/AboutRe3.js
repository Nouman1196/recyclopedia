import React from 'react'
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'

const AboutRe3 = ({ }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView>
                <Image style={Theme.re3Image} source={require(assetsPath + 'AppIconCOLOUR.jpg')} />
                <View style={Theme.detailedTextContainer}>
                    <Text style={Theme.detailedHeadingText}>About re3</Text>
                    <Text style={Theme.detailedText}>
                        re3 is a waste management partnership between three councils –
                        Bracknell Forest, Reading and Wokingham Borough Councils, who are
                        working together with FCC environment to provide residents with
                        efficient and cost-effective recycling and waste management
                        facilities.{"\n\n"}
                        re3 is responsible for arranging the disposal of household waste
                        collected across Bracknell Forest, Reading and Wokingham Boroughs.
                        This includes recyclable waste and general waste collected at the
                        kerbside, at the two Recycling Centres, glass banks and street
                        cleaning.
                        {"\n\n"}The partnership was established in 1999 under a joint working
                        agreement approved by each of the three councils. Since 2006, the
                        partnership has been working with FCC Environment, a private
                        contractor.
                        {"\n\n"}
                    </Text>
                    <Text style={Theme.detailedHeadingText}>Our Strategy and Aims</Text>
                    <Text style={Theme.detailedText}>
                        The way waste is treated and disposed of has changed a great deal in
                        recent years and our vision is to provide residents with a high
                        performing service that benefits the whole re3 community. Our
                        principal objectives are to reduce the net cost of waste and to
                        recycle or reuse 50% by 2020
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutRe3