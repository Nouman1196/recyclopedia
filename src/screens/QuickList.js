import React, { useEffect, useRef } from 'react'
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native'
import * as Animatable from "react-native-animatable";
import Theme from '../theme/Theme'

const QuickList = ({ navigation }) => {
    const AnimationRefFadeUp = useRef(null);
    const assetsPath = '../../assets/re3/'
    const data = [
        {
            title: "Aerosol",
            items: ["Deodorants", "Air fresheners", "Anti-freeze Cans"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Areosols.png'),
        },
        {
            title: "Food Tins & Drinks Cans",
            items: ["Drink Cans", "Food Tins", "Biscuit or Sweet Tins"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Cans.png'),
        },
        {
            title: "Cardboard",
            items: [
                "Cereal Boxes",
                "Corrugated Card",
                "Egg Boxes",
                "Kitchen and Toilet Roll Tubes",
                "Flattened Delivery Boxes",
                "Greetings Cards",
                "Empty Pizza Boxes",
            ],
            image: require(assetsPath + 'RecyclingSymbolsWRAP//Cardboard.png'),
        },
        {
            title: "Cartons",
            items: ["Juice Cartons", "Milk and Soup Cartons"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Cartons.png'),
        },
        {
            title: "Foil",
            items: ["Kitchen Foil", "Foil Trays"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Foil.png'),
        },
        {
            title: "Paper",
            items: [
                "Catalogues",
                "Brochures and Directories",
                "Junk Mail",
                "Flyers",
                "Letters and Envelopes (including window envelopes)",
                "Newspapers and Magazines",
                "Printer paper (white and coloured)",
                "Shredded Paper (only if contained in envelopes)",
                "Wrapping Paper (not foil based)",
            ],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Paper.png'),
        },
        {
            title: "Plastic bottles",
            items: ["Drinks", "Milk", "Toiletries & Shampoo", "Detergent"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Plastic-Bottles.png'),
        },
        {
            title: "Plastic pots",
            items: ["Yoghurt, cream, snack or soup pots"],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/Plastic-Pots.png'),
        },
        {
            title: "Plastic Packaging",
            items: [
                "Yoghurt Pots",
                "Cream Pots",
                "Snack or Soup Pots",
                "Sweet Tubs",
                "Ice Cream Tubs",
                "Margarine Tubs",
                "Fruit Punnets",
                "Meat or Cake Trays",
            ],
            image: require(assetsPath + 'RecyclingSymbolsWRAP/555.png'),
        },
    ]
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            animateFadeUp()
        });
        return unsubscribe;
    }, [navigation])
    const animateFadeUp = () => {
        AnimationRefFadeUp.current?.fadeInUp();
    };
    return (
        <SafeAreaView style={Theme.container}>
            <Animatable.View style={Theme.container} ref={AnimationRefFadeUp}>
                <FlatList
                    data={data}
                    contentContainerStyle={Theme.quickListContentContainer}
                    renderItem={({ item }) => (
                        <View>
                            <View style={Theme.quickListInnerContainer}>
                                <View style={Theme.quickListImageContainer}>
                                    <Image style={Theme.quickListImages} source={item.image} />
                                </View>
                                <Text style={Theme.quickListTitle}>{item.title}</Text>
                            </View>
                            <View style={Theme.quickListDetailedContainer}>
                                {item.items.map((item) => (
                                    <Text style={Theme.quickListDetailedText}>{item}</Text>
                                ))}
                            </View>
                        </View>
                    )}
                />
            </Animatable.View>
        </SafeAreaView>
    )
}

export default QuickList