import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, PixelRatio, Text, TouchableOpacity, View} from "react-native";
import {Card, Paragraph, Title} from "react-native-paper";
import MainStyle from "../configs/styles";
import {NEWS_URL, STORAGE_URL} from "../configs/utils";
import {formatDateNews} from "../extra/dateConverter";
import ShareNews from "../extra/ShareNews";
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {loadMoreDiseases} from "../actions/diseases";
import {connect} from "react-redux";
import FooterList from "../extra/FooterList";

const DiseasesItem = (props) => {
    const nav = useNavigation()
    const {
        data,
        loading,
        loadMore,
        loadMoreListDiseases
    } = props
    const [limit, setLimit] = useState(15)
    let [page, setPage] = useState(1)

    const _renderItem = ({item, index}) => {
        return (
            <View style={{
                margin: PixelRatio.getPixelSizeForLayoutSize(3)
            }}>
                <Card style={MainStyle.cardBody} onPress={() => nav.navigate('DiseasesDetails', {data: item})}>
                    <Card.Cover source={{uri: STORAGE_URL + item.image}} />
                    <Card.Content>
                        <Title numberOfLines={2}>{item.full_name}</Title>
                        <Paragraph numberOfLines={2}>{item.meta_description}</Paragraph>
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
        loading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                            loadMoreDiseases(limit,page)
                        }, 1000)
                    }
                }}
            />
    )
}

function mapStateToProps(state) {
    return {
        loadMore: state.diseasesStore.loadMore
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMoreListDiseases: (limit, page) => dispatch(loadMoreDiseases(limit, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseasesItem)