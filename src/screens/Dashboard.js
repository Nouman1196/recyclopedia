import React, { useEffect, useRef } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import * as Animatable from "react-native-animatable";
import Theme from '../theme/Theme'

const Dashboard = ({ navigation }) => {
    const AnimationRefFadeUp = useRef(null);
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
    const buttonsList = [
        {
            image: require(assetsPath + 'AppInfoButtons/re3Logo.png'),
            title: 'RE3 WEBSITE',
            navigate: 'WebViews',
            link: 'https://re3.fccenvironment.co.uk/'
        },
        {
            image: require(assetsPath + 'HomepageButtons/2.png'),
            title: 'CLICK & TIP',
            navigate: 'WebViews',
            link: 'https://bookings.bookinglab.co.uk/re3/'
        },
        {
            image: require(assetsPath + 'HomepageButtons/3.jpg'),
            title: 'WASTE SEARCH',
            navigate: 'WasteSearch'
        },
        {
            image: require(assetsPath + 'HomepageButtons/4.jpg'),
            title: 'WASTE INFO',
            navigate: 'WasteInfo'
        },
        {
            image: require(assetsPath + 'Homepage/messages.png'),
            title: 'MESSAGES',
            navigate: 'Messages'
        },
        {
            image: require(assetsPath + 'HomepageButtons/5.png'),
            title: 'QUICK LIST',
            navigate: 'QuickList'
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
            <Animatable.View ref={AnimationRefFadeUp}>
                <FlatList
                    data={topHorizontalList}
                    numColumns={3}
                    columnWrapperStyle={Theme.topHorizontalColumnWrapperStyle}
                    contentContainerStyle={Theme.topHorizontalContentContainerStyle}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigate)}>
                            <Image style={Theme.topHorizontalImage} source={item.image} />
                        </TouchableOpacity>
                    )}
                />
            </Animatable.View>
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

export default Dashboard