import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, PixelRatio, Text, TouchableOpacity, View} from "react-native";
import {Button, Card, IconButton, Paragraph, Title} from "react-native-paper";
import MainStyle from "../configs/styles";
import {NEWS_URL, STORAGE_URL} from "../configs/utils";
import {formatDateNews} from "../extra/dateConverter";
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import ShareNews from "../extra/ShareNews";
import {loadMoreListNews} from "../actions/news";
import {connect} from "react-redux";
import FooterList from "../extra/FooterList";

const NewsItem = (props) => {
    const nav = useNavigation()
    const {
        data,
        loading,
        loadMore,
        loadMoreNews
    } = props

    const [limit, setLimit] = useState(15)
    let [page, setPage] = useState(1)

    const _renderItem = ({item, index}) => {
        return (
            <View style={{
                margin: PixelRatio.getPixelSizeForLayoutSize(3)
            }} key={index}>
                <Card style={MainStyle.cardBody} onPress={() => nav.navigate('NewsDetails', {data: item})}>
                    <Card.Cover source={{uri: STORAGE_URL + item.image}} />
                    <Card.Content>
                        <Title numberOfLines={2}>{item.title}</Title>
                        <Paragraph numberOfLines={2}>{item.excerpt}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <View style={{flex: 1, flexDirection: "row", margin: PixelRatio.getPixelSizeForLayoutSize(2), justifyContent: 'space-between'}}>
                            <Text style={{
                                fontSize: 14,
                                color: '#737373'
                            }}>
                                {formatDateNews(item.created_at)}
                            </Text>
                            <TouchableOpacity onPress={() => ShareNews(NEWS_URL + item.id, item.title)}>
                                <Icon name="md-share-social-outline" color="black" size={14}/>
                            </TouchableOpacity>
                        </View>
                    </Card.Actions>
                </Card>
            </View>
        )
    }

    return (
        loading ? <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator size="large" />
        </View> :
            <FlatList
                data={data}
                renderItem={_renderItem}
                ListFooterComponent={FooterList(loadMore)}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    setPage(page++)
                    if(!loadMore) {
                        setTimeout(() => {
                            loadMoreNews(limit, page)
                        }, 1000)
                    }
                }
             }/>
    )
}

function mapStateToProps(state) {
    return {
        loadMore: state.newsStore.loadMore,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMoreNews: (limit, page) => dispatch(loadMoreListNews(limit, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem)