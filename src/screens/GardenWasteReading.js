import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';

const GardenWasteReading = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>GARDEN WASTE</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'GardenWastePages/HeaderGREENWASTE.jpg')} />
                <Text style={Theme.detailedHeadingText}>{"\n"}Buying a bin</Text>
                <Text style={Theme.detailedText} >
                    You can buy a garden waste bin or bag for your garden waste.
                </Text>
                <YellowButton title={'BUYING A BIN'} navigation={navigation} screenTitle={'BUYING A BIN'} link="https://www.reading.gov.uk/environment/waste-and-recycling/garden-waste/" />
                <Text style={Theme.detailedHeadingText}>{"\n"}Collection Charges</Text>
                <Text style={Theme.detailedText} >
                    Please click the button below to find the latest garden waste collection prices.
                </Text>
                <YellowButton title={'PAY COLLECTION CHARGE'} navigation={navigation} screenTitle={'PAY COLLECTION CHARGE'} link="https://www.reading.gov.uk/environment/waste-and-recycling/garden-waste/" />
                <Text style={Theme.detailedHeadingText}>{"\n"}Collections</Text>
                <Text style={Theme.detailedText} >
                    We will collect a maximum of 2 containers per property. The charge
                    covers both containers.
                    {"\n\n"}Collections are fortnightly and the service runs from 1st
                    April to 31st March except for a 2 week period at Christmas when no
                    garden waste collections are made.
                    {"\n\n"}
                </Text>
                <YellowButton title={'FURTHER INFORMATION'} navigation={navigation} screenTitle={'FURTHER INFORMATION'} link="https://www.reading.gov.uk/environment/waste-and-recycling/garden-waste/" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default GardenWasteReading