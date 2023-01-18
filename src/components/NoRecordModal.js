import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Theme from '../theme/Theme'

const NoRecord = ({ visible, onClose, addItem }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose} >
            <View style={Theme.noRecordsFoundContainer}>
                <View style={Theme.noRecordsInnerContainer}>
                    <Text style={Theme.noRecordFoundText}>No Item Found</Text>
                    <Text style={Theme.sorryText}>
                        Sorry we couldn’t find the item you we looking for, please
                        add it to our database
                    </Text>
                    <View style={Theme.noRecordsButtonContainer}>
                        <TouchableOpacity onPress={addItem} style={Theme.noRecordsInnerButtonContainerMg}>
                            <Text style={Theme.noRecordButtonText}>Add Item</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} style={Theme.noRecordsInnerButtonContainer}>
                            <Text style={Theme.noRecordButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default NoRecord