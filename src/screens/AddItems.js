import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Keyboard, Image } from 'react-native'
import Color from '../theme/Colors'
import Theme from '../theme/Theme'
import { FormInput } from "../components/FormInput";
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from "react-native-animatable";
import { AddItemsApi } from "../utilies/api/apiController";
import { AddItemValidation } from "../utilies/Validations";
import Loader from '../components/Loader';
import Toast from 'react-native-simple-toast';
import BottomButtons from '../components/BottomButton';

const Dashboard = ({ navigation }) => {
    const assetsPath = '../../assets/re3/'
    const [name, setName] = useState('')
    const [barCode, setBarCode] = useState('')
    const [keyBoardState, setKeyBoardState] = useState(false)
    const [composition, setComposition] = useState('')
    const [errorText, setErrortext] = useState('')
    const AnimationRefFadeUp = useRef(null);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        animateFadeUp()
    }, [])
    const animateFadeUp = () => {
        AnimationRefFadeUp.current?.fadeInUp();
    };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            if (keyBoardState === false) {
                setKeyBoardState(true)
            }
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoardState(false)
        });
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);


    const Submit = async () => {
        let validation = AddItemValidation({ name, barCode, composition })
        if (validation.valid == false) {
            setErrortext(validation.errors)
            Keyboard.dismiss()
        } else {
            setLoading(true)
            let response = await AddItemsApi({ name, barCode, composition })
            if (response !== 'Error') {
                Toast.show('Request for add item has been sent!', Toast.LONG)
                navigation.navigate('WasteSearch')
            } else {
                Toast.show("Something Went wrong", Toast.LONG)
            }
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={Theme.container}>
            <View style={Theme.recyclopediaImageContainer}>
                <Image style={Theme.recylopediaImage} source={require(assetsPath + 'RE3cycleopedia-LOGO-1080.jpg')} />
            </View>
            <Loader animating={loading} closeCall={() => setLoading(false)} />
            <Animatable.View ref={AnimationRefFadeUp} style={Theme.inputFieldsContainer}>
                <FormInput
                    title="Please enter the item name to add to the our database"
                    rightIconName={"circle-with-cross"}
                    RightIconFamily={name.length !== 0 && Entypo}
                    onFocus={() => setKeyBoardState(true)}
                    iconColorRight={Color.grey}
                    onPressIcon={() => { setName(''), setErrortext('') }}
                    placeholder="Enter Item Name Here"
                    textInputContainerStyle={[Theme.textInputContainerStyle, { borderColor: errorText == 1 || errorText == 2 ? Color.red : Color.grey }]}
                    style={Theme.inputStyle}
                    containerStyle={Theme.inputContainerStyle}
                    placeholderTextColor={Color.placeholderColor}
                    value={name}
                    autoCapitalize="none"
                    onChangeText={(text) => { setErrortext(''), setName(text) }}
                    error={errorText === "1" ? "Please Enter Item Name" : null || errorText === "2" ? "Please input at least two characters" : null}
                />
                <FormInput
                    title="The Item's Barcode Number"
                    rightIconName={"circle-with-cross"}
                    RightIconFamily={barCode.length !== 0 && Entypo}
                    onFocus={() => setKeyBoardState(true)}
                    iconColorRight={Color.grey}
                    onPressIcon={() => { setBarCode(''), setErrortext('') }}
                    placeholder="Enter Item Barcode Number Here"
                    textInputContainerStyle={[Theme.textInputContainerStyle, { borderColor: errorText == 3 ? Color.red : Color.grey }]}
                    style={Theme.inputStyle}
                    containerStyle={Theme.inputContainerStyle}
                    placeholderTextColor={Color.placeholderColor}
                    value={barCode}
                    autoCapitalize="none"
                    onChangeText={(text) => { setErrortext(''), setBarCode(text) }}
                    error={errorText == '1' ? 'Please input at least two characters' : null}
                />
                <FormInput
                    title="The main materials it's made from"
                    rightIconName={"circle-with-cross"}
                    RightIconFamily={composition.length !== 0 && Entypo}
                    onFocus={() => setKeyBoardState(true)}
                    iconColorRight={Color.grey}
                    onPressIcon={() => { setComposition(''), setErrortext('') }}
                    placeholder="Enter Material Composition Here"
                    textInputContainerStyle={[Theme.textInputContainerStyle, { borderColor: errorText == 4 ? Color.red : Color.grey }]}
                    style={Theme.inputStyle}
                    containerStyle={Theme.inputContainerStyle}
                    placeholderTextColor={Color.placeholderColor}
                    value={composition}
                    autoCapitalize="none"
                    onChangeText={(text) => { setErrortext(''), setComposition(text) }}
                    error={errorText == '1' ? 'Please input at least two characters' : null}
                />

                <TouchableOpacity onPress={Submit} style={Theme.searchButtonContainer}>
                    <Text style={Theme.searchBtnText}>Submit</Text>
                </TouchableOpacity>
            </Animatable.View>
            {!keyBoardState &&
                <BottomButtons navigation={navigation} />
            }

        </SafeAreaView>
    )
}

export default Dashboard