import React from 'react'
import { SafeAreaView, Text, ScrollView, Image } from 'react-native'
import Theme from '../theme/Theme'
import YellowButton from '../components/YellowButton';

const RecyclingCenter = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView style={Theme.scrollViewMargin}>
                <Text style={Theme.detailedHeadingTextCenter}>RECYCLING CENTER</Text>
                <Image style={Theme.recyclicCenterPic} source={require(assetsPath + 'RecyclingCentrePage/HWRCTopPic.jpg')} />
                <Text style={Theme.detailedText} >
                    Residents of Bracknell Forest Council, Reading Borough Council and
                    Wokingham Borough Council can use re3 Recycling Centres to bring their
                    own household waste to be re-used, recycled, composted or disposed of
                    free of charge.
                    {"\n\n"}Only make a booking if your visit is necessary and you are no
                    longer able to safely store your waste. Access will be denied if you
                    havn’t booked and your vehicle registration number isn’t on our list.
                    {"\n\n"}
                </Text>
                <YellowButton title={'BOOK VIA CLICK & TIP'} navigation={navigation} screenTitle={'Booking via Click & Tip'} link="https://bookings.bookinglab.co.uk/re3/" />
                <Text style={Theme.detailedHeadingText}>COMMERCIAL VEHICLES</Text>
                <Text style={Theme.detailedText} >
                    The Commercial vehicle permit is incorporated within the Click & Tip service, please follow instruction during the booking process.
                    {"\n"}
                </Text>
                <YellowButton title={'TRADE WASTE'} navigation={navigation} screenTitle={'Trade Waste'} link="https://re3.fccenvironment.co.uk/trade-waste-service/" />
                <Text style={Theme.detailedHeadingText}>{"\n\n"}CHARGES APPLY FOR NON-HOUSEHOLD WASTE ITEMS</Text>
                <Text style={Theme.detailedText} >
                    All vehicles will be assessed on arrival at a re3 recycling centre and
                    the following non-household waste items will now incur a charge: Soil
                    and rubble, Plasterboard, Gas bottles and Asbestos
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>LOCATIONS</Text>
                <Text style={Theme.detailedText} >
                    Bracknell Recycling Centre{"\n"}
                    Longshot Lane Household Waste Recycling Centre {"\n"}Longshot Lane
                    {"\n"}
                    Bracknell{"\n"}
                    RG12 1RL{"\n\n"}
                    Reading Recycling Centre{"\n"}
                    Smallmead Household Waste Recycling Centre{"\n"}Island Road{"\n"}
                    Reading{"\n"}
                    RG2 0RP{"\n"}
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>OPENING HOURS</Text>
                <Text style={Theme.detailedText} >
                    April 1st to September 30th{"\n"}08:00 - 20:00, 7 days a week {"\n\n"}
                    October 1st to March 31st{"\n"}08:00 - 18:00, 7 days a week
                    {"\n\n"}
                    Please note, both sites close at 4pm on Christmas Eve and are closed
                    on Christmas Day, Boxing Day and New Years Day.
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>ACCESS INFORMATION</Text>
                <Text style={Theme.detailedText} >
                    There is no pedestrian access on site and children under the age of 16
                    are required to stay in your vehicle for Health and Safety reasons at
                    all times.
                    {"\n\n"}In addition, please ensure you wear appropriate footwear and
                    gloves when handling your waste on site.
                    {"\n\n"}
                </Text>
                <Text style={Theme.detailedHeadingText}>RULES</Text>
                <Text style={Theme.detailedText} >
                    The Waste Acceptance Policy outlines limits on certain types of waste
                    that can be taken to the Household Waste Recycling Centres. These
                    limits are in line with the amount of waste that householders produce
                    and are designed to prevent businesses bringing waste to the centres.
                    {"\n\n"}Landlords, please note that waste generated from a property
                    that you rent out, maintain or refurbish, is classed as business waste
                    and not household waste.
                    {"\n\n"}Sites have been designed to enable disabled access. Should you
                    need any further information please speak to one of our Site
                    Operatives.
                    {"\n\n"}
                </Text>
                <YellowButton title={'ACCEPT POLICY'} navigation={navigation} screenTitle={'Accept Policy'} link="https://re3.fccenvironment.co.uk/wp-content/uploads/2022/07/Revised-WAP-Jul-2022.pdf" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecyclingCenter