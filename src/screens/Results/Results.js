import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView, View, Alert, Text, TouchableOpacity, FlatList, Platform, Linking, Image } from 'react-native'
import Color from '../../theme/Colors'
import Theme from '../../theme/Theme'
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";
import { request, PERMISSIONS } from "react-native-permissions";
import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import NoRecord from '../../components/NoRecordModal';
import BottomButtons from '../../components/BottomButton';

const Results = ({ navigation, route }) => {
    const [latitude, setLatitude] = useState(route?.params?.data?.centres[0]?.latitude || 37.78825)
    const [longitude, setLongitude] = useState(route?.params?.data?.centres[0]?.longitude || -122.4324)
    const [showSuggestion, setSuggestion] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [suggestionLock, setSuggestionLock] = useState(true)
    const animation = useRef(null)
    const [initialPosition, setInitialPosition] = useState({
        latitude: route?.params?.data?.centres[0]?.latitude || 37.78825,
        longitude: route?.params?.data?.centres[0]?.longitude || -122.4324,
        latitudeDelta: 0.8,
        longitudeDelta: 0.055
    })

    useEffect(() => {
        requestLocationPermission()
        addItemsPopUp()
    }, [])

    const addItemsPopUp = () => {
        if (route?.params?.data?.centres == undefined) {
            setModalVisible(true)
        }
    }

    const requestLocationPermission = async () => {
        if (Platform.OS === "android") {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            if (response === "granted") {
                locateCurrentPosition();
            }
        } else if (Platform.OS === "ios") {
            Geolocation.requestAuthorization();
            locateCurrentPosition();
        }
    };

    const locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = {};
                initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.055,
                };
                if (route.params.data?.centres[0]?.latitude == undefined) {
                    setInitialPosition(initialPosition)
                    setLatitude(initialPosition?.latitude)
                    setLongitude(initialPosition?.longitude)
                }
            },
            (error) => {
                Alert.alert(error.message);
            }
        );
    };

    const bounceInRight = () => {
        animation?.current?.bounceInRight(2000);
    };

    const bounceOutRight = () => {
        animation?.current?.bounceOutRight(1000);
    };
    const getPostionOnMap = (lat, lng) => {
        const scheme = Platform.select({
            ios: "maps:0,0?q=",
            android: "geo:0,0?q=",
        });
        const latLng = `${lat},${lng}`;
        const label = "Custom Label";
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`,
        });

        Linking.openURL(url);
    };

    useEffect(() => {
        if (showSuggestion) {
            bounceInRight()
        }
    }, [showSuggestion])
    return (
        <SafeAreaView style={Theme.container}>
            <NoRecord addItem={() => { setModalVisible(false), navigation.navigate('AddItems') }} visible={modalVisible} onClose={() => setModalVisible(false)} />
            <View style={Theme.mapMainContainer} >
                <MapView
                    provider={MapView.PROVIDER_GOOGLE}
                    region={initialPosition}
                    showsUserLocation={true}
                    style={Theme.mapStyle}
                    showsCompass
                >
                    <Circle
                        center={{ latitude: latitude, longitude: longitude }}
                        radius={25000}
                        fillColor={"rgba(0,137,110,0.11)"}
                        strokeWidth={3}
                        lineCap={"round"}
                        lineJoin={"round"}
                        strokeColor={Color.green}
                    />
                    {route?.params?.data?.centres?.map((item) => (
                        <Marker
                            onPress={() => {
                                if (suggestionLock) {
                                    setSuggestion(true)
                                    setSuggestionLock(false)
                                }
                            }}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                        >
                            <MapView.Callout tooltip style={Theme.mapViewCallout} onPress={() => { getPostionOnMap(item.latitude, item.longitude) }}>
                                <TouchableOpacity style={Theme.mapViewCalloutTouchableOpacity} >
                                    <Text style={Theme.mapViewCalloutHeading} >{item.building ? item.building : item.address}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsText}>{item.building}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsTextMargin}>{item.address}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsText}>{item.town}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsText}>{item.county}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsTextMargin} >{item.postcode}</Text>
                                    <Text style={Theme.mapViewCalloutDetailsText}>{item.website}</Text>
                                </TouchableOpacity>
                            </MapView.Callout>
                        </Marker>
                    ))}
                </MapView>
                {showSuggestion &&
                    <Animatable.View ref={animation} style={Theme.resultsSuggestionContainer}>
                        <View style={Theme.resultsSuggestionInnerContainer} >
                            <Text style={Theme.resultsSuggestionText}>Click any callout to open center in Google Maps App</Text>
                            <TouchableOpacity onPress={bounceOutRight}>
                                <AntDesign name="closecircle" style={Theme.resultsSuggestionCrossBtn} />
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                }
            </View>
            <View style={Theme.resultsDetailedContainer}>
                <View style={Theme.resultsDetailedInnerContainer}>
                    <Text style={Theme.resultsDetailedName} >
                        {route?.params?.data?.name?.length > 35
                            ? route?.params?.data?.name?.substring(0, 35 - 3) +
                            "..."
                            : route?.params?.data?.name}
                    </Text>
                    {route?.params?.data?.kerb_parts ?
                        <FlatList
                            data={route?.params?.data?.kerb_parts}
                            style={Theme.resultsDetailedListContainer}
                            renderItem={({ item, index }) => (
                                <>
                                    <View key={index} style={Theme.resultsDetailedListInnerContainer}>
                                        <View style={Theme.resultsDetailedInner}>
                                            <Text style={Theme.resultsDetailedListHeading}>Part: <Text>{item.name}</Text> </Text>
                                            <Text style={Theme.resultsDetailedListDetails}>{item.kerbside}</Text>
                                        </View>
                                        {item.url? 
                                        <Image resizeMode='contain' style={Theme.resultsDetailedBin} source={{ uri: item.url }} />
                                        : null
                                    }
                                    </View>
                                    {item.building ?
                                        <View style={Theme.resultsFurtherInfoContainer} >
                                            {item.further_information ? (
                                                <View>
                                                    <Text style={Theme.resultsDetailedListHeading} >Further Information:</Text>
                                                    <Text style={Theme.resultsDetailedListDetails}>{item.further_information}</Text>
                                                </View>
                                            ) : null}
                                            <Text style={Theme.resultsDetailedListHeading} >Alternatively take it to</Text>
                                            <Text style={Theme.resultsDetailedListDetails}>
                                                {item.building +
                                                    ", " +
                                                    item.address +
                                                    ", " +
                                                    item.postcode}
                                            </Text>
                                            <TouchableOpacity style={Theme.googleMapBtnContainer} onPress={() => { getPostionOnMap(item.latitude, item.longitude) }}>
                                                <Text style={Theme.googleMapBtnText} >SHOW IN MAP</Text>
                                            </TouchableOpacity>
                                        </View>
                                        : null
                                    }
                                </>
                            )}
                        />
                        : null
                    }
                </View>
                <BottomButtons navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

export default Results