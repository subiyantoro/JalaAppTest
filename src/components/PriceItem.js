import React, {useEffect, useState} from "react";
import {FlatList, Image, PixelRatio, Text, View} from "react-native";
import {Avatar, Badge, Button, Card} from "react-native-paper";
import MainStyle from "../configs/styles";
import BadgeVerify from "./BadgeVerify";
import {formatDate} from "../extra/dateConverter";
import StringConvert from "../extra/StringConvert";
import {useNavigation} from "@react-navigation/native";
import CurrencyFormat from "../extra/CurrencyFormat";
import {loadMorePrice} from "../actions/price";
import {connect} from "react-redux";
import FooterList from "../extra/FooterList";
import {loadMoreListNews} from "../actions/news";

const PriceItem = (props) => {
    const nav = useNavigation()
    const {
        data,
        loadMore,
        region,
        size,
        loadMoreListPrice
    } = props
    const [limit, setLimit] = useState(15)
    let [page, setPage] = useState(1)

    const _renderItem = ({item, index}) => {
        return (
            <Card style={MainStyle.cardPrice} key={index}>
                <Card.Content>
                    <View style={MainStyle.cardBody}>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <Avatar.Image size={32} source={{uri: 'https://app.jala.tech/storage/' + item.creator.avatar}} />
                            <View style={MainStyle.infoCreator}>
                                <Text style={MainStyle.supplierText}>Supplier</Text>
                                <Text style={{fontSize: 14, fontFamily: 'Lato-Regular'}}>{item.creator.name}</Text>
                            </View>
                            <View>
                                <BadgeVerify status={item.creator.email_verified} />
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 12,
                            marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
                            color: '#859ED1',
                            fontFamily: 'Lato-Regular',
                            lineHeight: 16
                        }}>
                            {formatDate(item.date)}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            marginVertical: PixelRatio.getPixelSizeForLayoutSize(1),
                            fontFamily: 'Lato-Regular',
                        }}>
                            {StringConvert(item.region.province_name)}
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: 'Lato-Regular'
                        }}>
                            {StringConvert(item.region.name)}
                        </Text>
                        <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginVertical: PixelRatio.getPixelSizeForLayoutSize(1)}}>
                            <View style={{flexDirection: "column"}}>
                                <Text style={{fontSize: 12, color: '#859ED1'}}>Size 100</Text>
                                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{item.currency_id} {CurrencyFormat(item.size_100)}</Text>
                            </View>
                            <View>
                                <Button mode="contained" color="#1B77DF" labelStyle={{fontFamily: 'Lato-Bold'}} onPress={() => nav.navigate('PriceDetails', {data: item})}>
                                    Lihat Detail
                                </Button>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        )
    }
    return (
        <FlatList
            data={data}
            renderItem={_renderItem}
            ListFooterComponent={FooterList(loadMore)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                setPage(page++)
                if(!loadMore) {
                    setTimeout(() => {
                        loadMoreListPrice(limit, page, region, size)
                    }, 1000)
                }
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        loadMore: state.priceStore.loadMore
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMoreListPrice: (limit, page, region, size) => dispatch(loadMorePrice(limit, page, region ,size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceItem)