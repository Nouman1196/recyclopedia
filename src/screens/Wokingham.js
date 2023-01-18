import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Theme from '../theme/Theme'

const Wokingham = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    const buttonsList = [
        {
            image: require(assetsPath + 'BracknellHomepageButtons/1.png'),
            title: 'BASIC RECYCLING LIST',
            navigate: 'QuickList'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/2.jpg'),
            title: 'RECYCLING CENTER',
            navigate: 'WebViews',
            link: 'https://www.wokingham.gov.uk/rubbish-and-recycling/recycling-centres-tips/'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/3.jpg'),
            title: 'COLLECTION DATES',
            navigate: 'WebViews',
            link: 'https://www.wokingham.gov.uk/rubbish-and-recycling/collections/find-rubbish-and-recycling-collection-days/'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/4.png'),
            title: 'MISSED BINS',
            navigate: 'WebViews',
            link: 'https://www.wokingham.gov.uk/rubbish-and-recycling/collections/report-missed-collection/'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/5.jpg'),
            title: 'GARDEN WASTE',
            navigate: 'GardenWasteWoking'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/6.jpg'),
            title: 'BULKY WASTE',
            navigate: 'BulkyMaterialWoking',
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/8.png'),
            title: 'VISIT re3',
            navigate: 'WebViews',
            link: 'https://re3.fccenvironment.co.uk/'
        },
        {
            image: require(assetsPath + 'iPage/5.png'),
            title: 'HELP',
            navigate: 'Help'
        },
        {
            image: require(assetsPath + 'Reading&WokinghamHomepagesButtons/dd.png'),
            title: 'FOOD WASTE',
            navigate: 'WebViews',
            link: 'https://www.wokingham.gov.uk/rubbish-and-recycling/food-waste/'
        },
    ]

    return (
        <SafeAreaView style={Theme.container}>
            <FlatList
                ListHeaderComponent={<Image style={Theme.bracknellForestImage} source={require(assetsPath + 'WIHomepage/3.jpg')} />}
                data={buttonsList}
                ListHeaderComponentStyle={Theme.quickListDetailedContainer}
                numColumns={3}
                columnWrapperStyle={Theme.buttonColumnWrapperStyle}
                contentContainerStyle={Theme.buttonContentContainerWithoutFlex}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.navigate, { title: item?.title, link: item?.link })} style={Theme.buttonTouchableOpacity}>
                        <Image style={Theme.buttonImage} source={item.image} />
                        <Text style={Theme.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default Wokingham