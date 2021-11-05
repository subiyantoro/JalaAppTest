import React, {useEffect, useState} from "react";
import {FlatList, Image, Linking, PixelRatio, ScrollView, Text, View} from "react-native";
import StringConvert from "../extra/StringConvert";
import MainStyle from "../configs/styles";
import {formatDate} from "../extra/dateConverter";
import {Avatar, Button} from "react-native-paper";
import {STORAGE_URL} from "../configs/utils";
import CurrencyFormat from "../extra/CurrencyFormat";

const PriceDetails = ({route}) => {
    const data = route.params.data
    const [size, setSize] = useState([])
    
    const _sizing = () => {
        for (let i = 20; i <= 200; i += 10) {
            setSize(size => [...size, i])
        }
    }

    const _renderSize = () => {
        return size.map((item, index) => {
            return (
                <View style={{flex: 1, flexDirection: "row", marginVertical: PixelRatio.getPixelSizeForLayoutSize(3)}} key={index}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 15, fontFamily: 'Lato-Regular'}}>Size {item}</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 15, fontFamily: 'Lato-Regular'}}>{data['size_' + item] === null ? "Tidak Tersedia" : 'Rp ' + CurrencyFormat(data['size_' + item])}</Text>
                    </View>
                </View>
            )
        })
    }

    useEffect(() => {
        _sizing()
    }, [])

    return (
        <ScrollView>
            <View style={MainStyle.containerPlace}>
                <Text style={{marginHorizontal: 12, fontFamily: 'Lato-Bold', fontSize: 16}}>{StringConvert(data.region.province_name)}</Text>
                <Text style={{marginHorizontal: 12, fontFamily: 'Lato-Regular', fontSize: 15, color: '#737373'}}>{StringConvert(data.region.name)}</Text>
            </View>
            <View style={{backgroundColor: 'white', paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(4), paddingTop: PixelRatio.getPixelSizeForLayoutSize(4), flex: 1, flexDirection: "column", marginBottom: PixelRatio.getPixelSizeForLayoutSize(5)}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: '#737373', fontFamily: 'Lato-Regular'}}>{formatDate(data.date)}</Text>
                    <View style={{flexDirection: "row", backgroundColor: '#FFF8E7', padding: 5, borderRadius: 24}}>
                        <Image source={require('../../assets/verified.png')} style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(5),
                            height: PixelRatio.getPixelSizeForLayoutSize(5)
                        }} />
                        <Text style={{fontSize: 12, fontFamily: 'Lato-Regular', color: '#737373'}}> Terverifikasi</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <Avatar.Image source={{uri: STORAGE_URL + data.creator.avatar}} size={32}/>
                    <View style={{paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(2)}}>
                        <Text style={{fontSize: 12, color: '#A09E9E'}}>Supplier</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Lato-Bold'}}>{data.creator.name}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: PixelRatio.getPixelSizeForLayoutSize(8)}}>
                    <View>
                        <Text style={{marginVertical: 3, fontFamily: 'Lato-Regular', fontSize: 12, color: '#737373'}}>Kontak</Text>
                        <Text style={{fontSize: 16, fontFamily: 'Lato-Bold'}}>{data.creator.phone}</Text>
                    </View>
                    <Button mode="contained" onPress={() => Linking.openURL("tel:" + data.creator.phone)} color="#1B77DF">
                        Hubungi
                    </Button>
                </View>
                {/*<FlatList data={size} renderItem={_renderSize} />*/}
                {_renderSize()}
                <Text style={{fontSize: 16, fontFamily: 'Lato-Bold', marginVertical: PixelRatio.getPixelSizeForLayoutSize(4)}}>Catatan</Text>
                <Text style={{marginBottom: PixelRatio.getPixelSizeForLayoutSize(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text>
            </View>
        </ScrollView>
    )
}

export default PriceDetails