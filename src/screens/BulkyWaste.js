import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';

const BulkyMaterial = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>BULKY WASTE COLLECTIONS</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'BulkyWastePages/HeaderBULKYWASTE.jpg')} />
                <Text style={Theme.detailedHeadingText}>{'\n'}What can be collected as a bulky item?</Text>
                <Text style={Theme.detailedText} >
                    As a general rule we will not collect anything that the average family
                    would not ordinarily take if they moved house.
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>We would normally collect bulky household items such as:{" "}</Text>
                <Text style={Theme.detailedText} >
                    • carpets (please cut and roll into manageable sizes){"\n"}• furniture
                    {"\n"}• household electrical items - fridges and freezers must be
                    empty {"\n"}• sofas and armchairs
                </Text>
                <Text style={Theme.detailedHeadingText}>We do not collect: </Text>
                <Text style={Theme.detailedText} >
                    • DIY, construction and demolition waste{"\n"}• fitted kitchens,
                    bathroom suites, internal doors {"\n"}• garden sheds, fences and
                    greenhouses
                    {"\n"}• garden waste
                    {"\n"}• items that are over saturated or unsanitary
                    {"\n"}• any waste from a business premises
                    {"\n\n"}
                    The council has absolute discretion as to what it will and will not
                    take as ‘bulky waste’.
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>How much does it cost?</Text>
                <Text style={Theme.detailedText} >
                    We charge for collection per item of furniture, rather than per set.
                    For example, a bed base, a mattress and a head- board counts as 3
                    separate items.
                    {"\n\n"}
                    Please click below to see latest prices.
                    {"\n\n"}
                </Text>
                <YellowButton title={'ARRANGE A COLLECTION'} navigation={navigation} screenTitle={'Arrange a Collection'} link="https://www.bracknell-forest.gov.uk/bins-and-recycling/reduce-and-recycle/bulky-item-collection" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default BulkyMaterial