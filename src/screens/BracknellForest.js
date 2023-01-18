import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Theme from '../theme/Theme'

const BracknellForest = ({ navigation }) => {
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
            navigate: 'RecyclingCenter',
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/3.jpg'),
            title: 'COLLECTION DATES',
            navigate: 'WebViews',
            link: 'https://selfservice.mybfc.bracknell-forest.gov.uk/w/webpage/waste-collection-days'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/4.png'),
            title: 'MISSED BINS',
            navigate: 'WebViews',
            link: 'https://www.bracknell-forest.gov.uk/bins-and-recycling/bin-issues/report-missed-bin-collection'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/5.jpg'),
            title: 'GARDEN WASTE',
            navigate: 'GardenWaste'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/6.jpg'),
            title: 'BULKY WASTE',
            navigate: 'BulkyMaterial',
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/7.png'),
            title: 'JOIN POINTS SCHEME',
            navigate: 'WebViews',
            link: 'https://www.bracknell-forest.gov.uk/recycling-incentive-scheme/how-join'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/s.png'),
            title: 'VISIT re3',
            navigate: 'WebViews',
            link: 'https://re3.fccenvironment.co.uk/'
        },
        {
            image: require(assetsPath + 'BracknellHomepageButtons/9.jpg'),
            title: 'HELP',
            navigate: 'Help'
        },
        {
            image: require(assetsPath + 'Reading&WokinghamHomepagesButtons/foodWaste.png'),
            title: 'FOOD WASTE',
            navigate: 'WebViews',
            link: 'https://www.bracknell-forest.gov.uk/bins-and-recycling/food-waste-collection'
        },
    ]

    return (
        <SafeAreaView style={Theme.container}>
            <FlatList
                ListHeaderComponent={<Image style={Theme.bracknellForestImage} source={require(assetsPath + 'WIHomepage/1.jpg')} />}
                data={buttonsList}
                ListHeaderComponentStyle={Theme.quickListDetailedContainer}
                numColumns={3}
                columnWrapperStyle={Theme.buttonColumnWrapperStyle}
                contentContainerStyle={Theme.buttonContentContainerWithoutFlex}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.navigate, { title: item?.title, link: item?.link })} style={Theme.buttonTouchableOpacity}>
                        <Image style={Theme.buttonImage} source={item.image} />
                        <Text style={Theme.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default BracknellForest