import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Theme from '../theme/Theme'
import WebView from "react-native-webview";
import Loader from '../components/Loader';

const WebViews = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Text style={Theme.headerTitleStyle}>{route?.params?.title}</Text>
            ),
        });
    }, []);
    return (
        <SafeAreaView style={Theme.container}>
            <Loader animating={loading} />
            <WebView
                source={{ uri: route?.params?.link }}
                onLoad={() => {
                    setLoading(false);
                }}
            />
        </SafeAreaView>
    )
}

export default WebViews