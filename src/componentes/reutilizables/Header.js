import React from 'react';
import { Text, View } from 'react-native';

const Header = (prop) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>   
        <Text style={textStyle}>{prop.headerText}</Text>
    </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 20 },
        shadowOpacity: 30,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        
    },
};
export { Header };
