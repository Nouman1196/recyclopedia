import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import Theme from '../theme/Theme'

const BottomButtons = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    const buttonsList = [
        {
            image: require(assetsPath + 'Buttons-SQ-512-Search-Again-Green.png'),
            title: 'SEARCH AGAIN',
            navigate: 'WasteSearch'
        },
        {
            image: require(assetsPath + 'Buttons-SQ-512-Add-Item-Orange.png'),
            title: 'ADD ITEM',
            navigate: 'AddItems'
        },
        {
            image: require(assetsPath + 'Buttons-SQ-512-Home-Red.png'),
            title: 'HOME',
            navigate: 'Dashboard'
        },
    ]

    return (
        <View>
            <FlatList
                data={buttonsList}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} style={Theme.buttonTouchableOpacity}>
                        <Image style={Theme.bottomButtonImage} source={item.image} />
                        <Text style={Theme.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
export default BottomButtons