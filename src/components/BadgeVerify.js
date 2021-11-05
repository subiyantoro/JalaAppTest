import React from "react";
import {Avatar, Badge} from "react-native-paper";
import {Image, PixelRatio, Text, View} from "react-native";

const BadgeVerify = (props) => {
    const {
        status
    } = props

    if (status) {
        return (
            <View style={{backgroundColor: '#FFF8E7', flexDirection: "row", padding: PixelRatio.getPixelSizeForLayoutSize(3), borderRadius: 25}}>
                <Avatar.Image source={require('../../assets/verify.png')} size={16} />
                <Text style={{fontSize: 12}}> Terverifikasi</Text>
            </View>
        )
    } else {
        return (
            <Badge style={{backgroundColor: 'grey'}}>
                Belum terverifikasi
            </Badge>
        )
    }
}

export default BadgeVerify