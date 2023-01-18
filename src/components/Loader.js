import React from "react";
import { ActivityIndicator, Modal } from "react-native";
import Color from "../theme/Colors";
import Theme from "../theme/Theme";

const Loader = ({ animating, closeCall }) => {
    return (
        <Modal onRequestClose={closeCall} visible={animating} transparent={true}>
            <ActivityIndicator style={Theme.withoutFlexContainer} size="large" color={Color.grey} animating={animating} />
        </Modal>
    )
}

export default Loader