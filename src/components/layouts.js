import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class DrawBorder extends React.Component {
    render() {
        return (
            <View>
                <Image
                    source={require('./img/Hinh1.jpg')}
                />
            </View>
        );
    }
}

export default DrawBorder;