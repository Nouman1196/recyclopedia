import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import Theme from '../theme/Theme'

const WasteInfo = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    const topHorizontalList = [
        {
            image: require(assetsPath + 'WIHomepage/1.jpg'),
            navigate: 'BracknellForest'
        },
        {
            image: require(assetsPath + 'WIHomepage/2.jpg'),
            navigate: 'Reading'
        },
        {
            image: require(assetsPath + 'WIHomepage/3.jpg'),
            navigate: 'Wokingham'
        },
    ]

    return (
        <SafeAreaView style={Theme.container}>
            <View style={Theme.wasteInfoInnerContainer}>
                <Text style={Theme.wasteInfoText}>WASTE{"\n"}INFORMATION</Text>
                <Text style={Theme.wasteinfoDesText}>Please choose your local council</Text>
            </View>
            <View style={Theme.container}>
                <FlatList
                    data={topHorizontalList}
                    contentContainerStyle={Theme.wasteInfoCenterView}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigate)}>
                            <Image style={Theme.wasteInfoImage} source={item.image} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default WasteInfo