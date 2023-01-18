import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Color from '../theme/Colors';
const FormInput = (data) => {
    let { error, rightIconName, containerStyle, iconColor, onPressIcon, forgetPassword, forget, leftIconName, textInputContainerStyle, title, predefineContainer, predefineTextStyle, LeftIconFamily, RightIconFamily, iconColorRight, leftIconStyle, leftIconGradient, selectable } = data
    return (
        <View style={containerStyle} >
            <View style={predefineContainer}>
                {title &&
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>{title}</Text>
                }
                <View style={textInputContainerStyle}>
                    {leftIconName &&
                        <LeftIconFamily color={iconColor} size={20} name={leftIconName} />
                    }
                    {selectable ?
                        <Text {...data}>{data.value ? data.value : data.placeholder}</Text>
                        :
                        <TextInput
                            {...data}
                            // autoCapitalize="none"
                        />
                    }

                    {RightIconFamily &&
                        <RightIconFamily style={{ textAlignVertical: 'center', paddingRight: 5 }} color={iconColorRight} onPress={onPressIcon} size={16} name={rightIconName} />
                    }
                </View>
            </View>
            {forget &&
                <TouchableOpacity style={{ marginTop: 5, alignSelf: 'flex-end', marginBottom: 15 }} onPress={forgetPassword}>
                    <Text style={{}}>Forget password?</Text>
                </TouchableOpacity>
            }
            {error && <Text style={{color: Color.grey}} >{error}</Text>
            }
        </View>
    );
}


export { FormInput }

