import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';
const GardenWaste = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>GARDEN WASTE</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'GardenWastePages/HeaderGREENWASTE.jpg')} />
                <Text style={Theme.detailedHeadingText}>{'\n'}Buying a bin</Text>
                <Text style={Theme.detailedText} >
                    New brown bins are available in 240L and 140L sizes.
                </Text>
                <YellowButton title={'BUY A NEW BIN'} navigation={navigation} screenTitle={'BUYING A BIN'} link="https://selfservice.mybfc.bracknell-forest.gov.uk/w/webpage/auth-service?service=core_bin_enquiries&bintype=brown&request=subscription" />

                <YellowButton title={'PAY COLLECTION CHARGES'} navigation={navigation} screenTitle={'PAY COLLECTION CHARGE'} link="https://selfservice.mybfc.bracknell-forest.gov.uk/w/webpage/auth-service?service=core_bin_enquiries&bintype=brown&request=subscription" />
                <Text style={Theme.detailedHeadingText}>{"\n"}Collections</Text>
                <Text style={Theme.detailedText} >
                    Collections are fortnightly. The annual charge covers 25 collections.
                    {"\n\n"}
                </Text>
                <YellowButton title={'FURTHER INFORMATION'} navigation={navigation} screenTitle={'FURTHER INFORMATION'} link="https://www.bracknell-forest.gov.uk/bins-and-recycling/garden-waste-collection" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default GardenWaste