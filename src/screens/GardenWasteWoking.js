import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';

const GardenWasteWoking = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>GARDEN WASTE</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'GardenWastePages/HeaderGREENWASTE.jpg')} />
                <Text style={Theme.detailedHeadingText}>{'\n'}Buying a bin</Text>
                <Text style={Theme.detailedText} >
                    The garden waste service is able to collect garden clippings, grass
                    cuttings, leaves and weeds and runs throughout the year.
                </Text>
                <Text style={Theme.detailedHeadingText}>{"\n"}Collection Charges</Text>
                {/* <Text style={Theme.detailedText} >
                    The annual cost of the service is £70 between 1 April 2022 to 31 March 2023. If you opt in later in the year the cost will be reduced as follows:
                    {"\n\n"}• 1 April to 31 May - £70{"\n"}• 1 June to 30 September - £60{"\n"}• 1 October to 31 December - £35{"\n\n"}
                    Reduced cost is only available for new registrations. Renewal for
                    existing customers who’ve received their renewal invoice costs £60
                    throughout the year.
                </Text> */}
                <Text style={Theme.detailedText} >
                    There is an annual charge for Garden Waste collections, please click the further information button below for more information and to pay online for this service.
                </Text>

                <Text style={Theme.detailedHeadingText}>{"\n"}Collections</Text>
                <Text style={Theme.detailedText} >
                    Garden waste is collected fortnightly, to find your next collection date please click the further information button below.
                    {"\n\n"}
                </Text>
                <YellowButton title={'FURTHER INFORMATION'} navigation={navigation} screenTitle={'FURTHER INFORMATION'} link="https://www.wokingham.gov.uk/rubbish-and-recycling/garden-waste/" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default GardenWasteWoking