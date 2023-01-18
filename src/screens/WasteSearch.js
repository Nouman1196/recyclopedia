import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Keyboard, ActivityIndicator, FlatList } from 'react-native'
import Color from '../theme/Colors'
import Theme from '../theme/Theme'
import { FormInput } from "../components/FormInput";
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from "react-native-animatable";
import { get_data, save_data } from "../utilies/AsyncStorage/AsyncStorage";
import { SearchApi, SearchResultApi, SearchResultBarCodeApi } from "../utilies/api/apiController";
import { SeachPageValidation } from "../utilies/Validations";
import Loader from '../components/Loader';
import Toast from 'react-native-simple-toast';
import BarcodeMask from "react-native-barcode-mask";
import { RNCamera } from "react-native-camera";
import NoRecord from '../components/NoRecordModal';

const WasteSearch = ({ navigation }) => {
    const [name, setName] = useState('')
    const [postCode, setPostCode] = useState('')
    const [select, setSelect] = useState(0)
    const [errorText, setErrortext] = useState('')
    const [nameSuggestionShow, setNameSuggestionShow] = useState(false)
    const [postCodeSuggestionShow, setPostCodeSuggestionShow] = useState(false)
    const AnimationRefFadeUp = useRef(null);
    const [searchNameResults, setSearchNameResults] = useState([])
    const [searcPostCodeResults, setSearchPostCodeResults] = useState([])
    const [nameSuggestionLoader, setNameLoaderSuggestions] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [enableBarCodeScanner, setEnableBarCodeScanner] = useState(false)
    const options = [
        {
            title: 'Item Name',
            key: 0
        },
        {
            title: 'Scan Barcode',
            key: 1
        },
    ]

    useEffect(() => {
        animateFadeUp()
    }, [select])
    const animateFadeUp = () => {
        AnimationRefFadeUp.current?.fadeInUp();
    };

    const SearchName = async (keyword) => {
        setNameLoaderSuggestions(true)
        let params = {
            query: keyword
        }
        let response = await SearchApi({ navigation, params })
        if (response !== 'Error') {
            setSearchNameResults(response.data)
        } else {

        }
        setNameLoaderSuggestions(false)
    }
    const onCompleteScan = (e) => {
        setEnableBarCodeScanner(false)
        ApiCall({ barCodeValue: e.data })
    }
    const Submit = async () => {
        let validation = SeachPageValidation({ name, postCode, multiField: select == 0 ? true : false })
        Keyboard.dismiss()
        if (validation.valid == false) {
            setErrortext(validation.errors)
            setNameSuggestionShow(false)
        } else {
            setNameSuggestionShow(false)
            storePostalCodeSuggestion()
            if (select == 0) {
                ApiCall({ barCodeValue: 0 })
            } else {
                setEnableBarCodeScanner(true)
            }
        }
    }
    const ApiCall = async ({ barCodeValue }) => {
        setLoading(true)
        let postCodeParams = {
            item: name,
            address: postCode.toUpperCase()
        }
        let barCodeParams = {
            query: barCodeValue,
            address: postCode.toUpperCase()
        }
        let response = select == 0 ? await SearchResultApi({ params: postCodeParams, navigation }) : await SearchResultBarCodeApi({ params: barCodeParams, navigation })
        if (response !== "Error") {
            console.log(response.data);
            if (response.data.result || response.data.message) {
                setModalVisible(true)
            } else {
                navigation.navigate('Results', { data: response.data })
            }
        } else {
            Toast.show(response.data.result ? response.data.result : "Something Went wrong", Toast.LONG)
        }
        setLoading(false)
    }
    const storePostalCodeSuggestion = async () => {
        let response = await get_data('@postalSuggestion')
        let arr = []
        if (response) {
            arr = response
            if (!response.some(item => item == postCode)) {
                arr.unshift(postCode)
            }
        } else {
            arr = [postCode]
        }
        await save_data('@postalSuggestion', arr)
    }
    const retrievePostalSuggestion = async () => {
        let response = await get_data('@postalSuggestion')
        if (response) {
            setSearchPostCodeResults(response)
            setPostCodeSuggestionShow(true)
        }
    }
    const onSelect = (index) => {
        setName(''), setErrortext(''), setPostCode(''), setEnableBarCodeScanner(false), setSelect(index)
    }

    return (
        <SafeAreaView style={Theme.container}>
            <NoRecord visible={modalVisible} onClose={() => setModalVisible(false)} addItem={() => { setModalVisible(false), navigation.navigate('AddItems') }} />
            <Loader animating={loading} closeCall={() => setLoading(false)} />
            <Text style={Theme.searchByText}>SEARCH BY</Text>
            <View>
                <FlatList
                    data={options}
                    numColumns={2}
                    contentContainerStyle={Theme.topHorizontalContentContainerStyle}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => { onSelect(index) }} style={[Theme.selectButtonContainer, { backgroundColor: select == index ? Color.green : Color.grey, marginRight: index == 0 ? 10 : 0 }]}>
                            <Text style={Theme.selectBtnText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <Animatable.View ref={AnimationRefFadeUp} style={Theme.inputFieldsContainer}>
                {select == 0 &&
                    <>
                        <FormInput
                            title="Name of Item"
                            rightIconName={"circle-with-cross"}
                            RightIconFamily={name.length !== 0 && Entypo}
                            iconColorRight={Color.grey}
                            onPressIcon={() => { setName(''), setNameSuggestionShow(false) }}
                            placeholder="Enter Name Here"
                            textInputContainerStyle={[Theme.textInputContainerStyle, { borderColor: errorText == 1 ? Color.red : Color.grey }]}
                            style={Theme.inputStyle}
                            containerStyle={Theme.inputContainerStyle}
                            placeholderTextColor={Color.placeholderColor}
                            value={name}
                            onSubmitEditing={() => setNameSuggestionShow(false)}
                            autoCapitalize="none"
                            onChangeText={(text) => { setErrortext(''), setName(text), SearchName(text), setNameSuggestionShow(true) }}
                            error={errorText == '1' ? 'Please input at least two characters' : null}
                        />
                        <View style={Theme.suggestionContainer}>
                            {nameSuggestionLoader ?
                                <ActivityIndicator
                                    animating={nameSuggestionLoader}
                                    size={"small"}
                                    color={"#0234a6"}
                                    style={Theme.activityIndicator}
                                />
                                :
                                Array.isArray(searchNameResults) && name.length > 0 && nameSuggestionShow ?
                                    <FlatList
                                        data={searchNameResults}
                                        style={Theme.suggestionListContainer}
                                        renderItem={({ item, index }) => (
                                            <TouchableOpacity onPress={() => { setNameSuggestionShow(false), setName(item) }} activeOpacity={0.8} style={Theme.suggestionListTouchableOpacity}>
                                                <Text style={Theme.suggestionListText}>{item}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                    : name.length > 0 && nameSuggestionShow &&
                                    <View style={Theme.noSuggestionContainer} >
                                        <Text style={Theme.suggestionListText}>No Search Results Found</Text>
                                    </View>
                            }
                        </View>
                    </>
                }
                {enableBarCodeScanner && select == 1 ?
                    <View style={Theme.barCodeContainer}>
                        <RNCamera
                            style={Theme.cameraStyle}
                            onBarCodeRead={onCompleteScan}
                            captureAudio={false}
                            type={RNCamera.Constants.Type.back}
                        >
                            <BarcodeMask
                                height={Theme.barCodeHeight}
                                edgeColor={"#249346"}
                                edgeBorderWidth={2}
                            />
                        </RNCamera>
                    </View>
                    :
                    <>
                        <FormInput
                            title="Postcode"
                            placeholder="Enter Postcode Here"
                            rightIconName={"circle-with-cross"}
                            RightIconFamily={postCode.length !== 0 && Entypo}
                            onPressIcon={() => { setPostCode(''), setPostCodeSuggestionShow(false) }}
                            iconColorRight={Color.grey}
                            textInputContainerStyle={[Theme.textInputContainerStyle, { borderColor: errorText == 2 ? Color.red : Color.grey, }]}
                            style={Theme.inputStyle}
                            containerStyle={Theme.inputContainerStyle}
                            placeholderTextColor={Color.placeholderColor}
                            value={postCode}
                            onSubmitEditing={() => setPostCodeSuggestionShow(false)}
                            autoCapitalize="characters"
                            onChangeText={(text) => { setErrortext(''), setPostCode(text), retrievePostalSuggestion() }}
                            error={errorText == '2' ? 'Please Enter Your Postcode' : null}
                        />
                        <View>
                            {postCode.length > 0 && postCodeSuggestionShow &&
                                <FlatList
                                    data={searcPostCodeResults}
                                    style={Theme.suggestionListContainer}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity onPressIn={() => Keyboard.dismiss()} onPress={() => { setPostCodeSuggestionShow(false), setPostCode(item) }} activeOpacity={0.8} style={Theme.suggestionListTouchableOpacity}>
                                            <Text style={Theme.suggestionListText}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            }
                        </View>
                        <TouchableOpacity onPress={Submit} style={Theme.searchButtonContainer}>
                            <Text style={Theme.searchBtnText}>Search</Text>
                        </TouchableOpacity>
                    </>
                }
            </Animatable.View>
        </SafeAreaView>
    )
}

export default WasteSearch