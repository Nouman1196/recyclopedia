import React from "react";
import Theme from "../theme/Theme";
import Color from "../theme/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HeaderRight = ({ navigation }) => (
    <MaterialCommunityIcons onPress={() => navigation.navigate('Information')} size={Theme.headerIconSize} name='information-variant' color={Color.white} />
)
export default HeaderRight