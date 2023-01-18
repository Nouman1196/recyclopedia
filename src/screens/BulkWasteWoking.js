import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';

const BulkyMaterialWoking = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>BULKY WASTE COLLECTIONS</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'BulkyWastePages/HeaderBULKYWASTE.jpg')} />
                <Text style={Theme.detailedHeadingText}>{'\n'}What can be collected as a bulky item?</Text>
                <Text style={Theme.detailedText} >
                    You can use our large item collection service to dispose of any of
                    your big, unwanted items.
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>Large items we can collect:</Text>
                <Text style={Theme.detailedText} >
                    • Carpets{"\n"}• Garden furniture chairs and tables{"\n"}• Household
                    furniture, bed bases, mattresses, sofas, wardrobes, tables, chairs{" "}
                    {"\n"}• Washing machine, tumble dryer, dishwasher{"\n"}• Boxes or bags
                    of household rubbish{"\n"}• Televisions and computer monitors{"\n"}•
                    Fridges, freezers and fridge freezers
                </Text>
                <Text style={Theme.detailedHeadingText}>We do not collect: </Text>
                <Text style={Theme.detailedText} >
                    • Builders rubble{"\n"}• Double garage doors{"\n"}• Garden waste
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>How much does it cost?</Text>
                <Text style={Theme.detailedText} >
                    We can collect large unwanted items that are not easily recycled or can be disposed of by you. A charge applies for collections of up to 5 items. To book a collection please click the button below.
                    {"\n\n"}
                </Text>
                <YellowButton title={'ARRANGE A COLLECTION'} navigation={navigation} screenTitle={'Charity Shops'} link="https://large-item-collection.wokingham.gov.uk/" />
                <Text style={Theme.detailedHeadingText}>{'\n'}Other ways to dispose of large items for free</Text>
                <Text style={Theme.detailedText} >
                    • Dispose of items at a rubbish tip / recycling centre{"\n"}• You can
                    also donate unwanted furniture to Age Concern. Visit their website{" "}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BulkyMaterialWoking