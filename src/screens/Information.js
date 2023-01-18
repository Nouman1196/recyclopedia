import React, { useEffect, useRef } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import * as Animatable from "react-native-animatable";
import Theme from '../theme/Theme'

const Information = ({ navigation }) => {
    const AnimationRefFadeUp = useRef(null);
    const assetsPath = '../../assets/re3/'
    const buttonsList = [
        {
            image: require(assetsPath + 'iPage/1.png'),
            title: 'MESSAGES',
            navigate: 'Messages'
        },
        {
            image: require(assetsPath + 'iPage/2.png'),
            title: 'ABOUT re3',
            navigate: 'AboutRe3',
        },
        {
            image: require(assetsPath + 'iPage/3.png'),
            title: 'ABOUT THIS APP',
            navigate: 'AboutApp',
        },
        {
            image: require(assetsPath + 'iPage/4.png'),
            title: 'HOW TO USE',
            navigate: 'HowToUse'
        },
        {
            image: require(assetsPath + 'Buttons-Help-Green.png'),
            title: 'HELP',
            navigate: 'Help'
        },

        {
            image: require(assetsPath + 'HomepageButtons/5.png'),
            title: 'PRIVACY POLICIES',
            navigate: 'WebViews',
            link: 'https://www.reading.gov.uk/dataprotection'
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
            <View style={Theme.recyclopediaImageContainer}>
                <Image style={Theme.recylopediaImage} source={require(assetsPath + 'RE3cycleopedia-LOGO-1080.jpg')} />
            </View>
            <Animatable.View ref={AnimationRefFadeUp} style={Theme.container}>
                <FlatList
                    data={buttonsList}
                    numColumns={3}
                    columnWrapperStyle={Theme.buttonColumnWrapperStyle}
                    contentContainerStyle={Theme.buttonContentContainer}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigate, { title: item?.title, link: item?.link })} style={Theme.buttonTouchableOpacity}>
                            <Image style={Theme.buttonImage} source={item.image} />
                            <Text style={Theme.buttonText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Animatable.View>
        </SafeAreaView>
    )
}

export default Information