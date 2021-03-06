import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
                {label}
            </Text>
            <TextInput
            secureTextEntry=  {secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyle }
            ></TextInput>
        </View>
    )
}; 
const styles = {
    inputStyle : {
        color:'#000',
        paddingRight : 5,
        paddingLeft : 5,
        fontSize : 18,
        lineHeight : 23,
        flex : 2,
        height:40,
      //  borderWidth:1,
      //  borderColor:"gray"
    },
    labelStyle : {
        fontSize:18,
        paddingLeft : 20,
        flex : 1,
        color:'#000'
    },
    containerStyle : {
        height : 40,
        flex : 1,
        flexDirection:'row',
        alignItems : 'center'
    }
}
export {Input};