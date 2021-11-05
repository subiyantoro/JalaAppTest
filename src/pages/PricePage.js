import React, {useRef} from "react";
import { useEffect, useState } from "react"
import {ActivityIndicator, Image, PixelRatio, Text, TouchableOpacity, View} from "react-native"
import { connect } from "react-redux"
import {getListPriceShrimp, searchListPrice} from "../actions/price"
import PriceItem from "../components/PriceItem";
import MainStyle from "../configs/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SizeBottomSheet from "../components/SizeBottomSheet";
import {getListRegion, loadMoreRegion} from "../actions/region";
import RegionBottomSheet from "../components/RegionBottomSheet";

const PricePage = (props) => {
    const {
        dataPrice,
        loading,
        getListData,
        getListRegionData,
        regionListData,
        loadRegion,
        loadMoreRegion,
        searchData,
        loadMoreRegionList
    } = props

    const [limit, setLimit] = useState(15)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(100)
    const [region, setRegion] = useState("")
    const [regionId, setRegionId] = useState("")
    const refSizeSheet = useRef()
    const refRegionSheet = useRef()

    useEffect(() => {
        getListData(limit, page)
        getListRegionData(region)
    }, [])

    const _sizeFiltering = (sizeItem) => {
        setSize(sizeItem)
        searchData(regionId, size)
    }

    const _searchRegion = (citySearch: String) => {
        getListRegionData(citySearch)
    }

    const _regionFiltering = (regionId, cityName: String) => {
        setRegionId(regionId)
        setRegion(cityName)
        searchData(regionId, size)
    }

    const _loadMoreRegionList = (pageRegion) => {
        loadMoreRegionList(region, pageRegion)
    }

    const _renderBottomButton = () => {
        return (
            <View style={{
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(5),
                width: '100%',
                flexDirection: 'row'
            }}>
                <View style={{
                    width: '40%',
                    height: PixelRatio.getPixelSizeForLayoutSize(44),
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#004492',
                            borderTopLeftRadius: 60,
                            borderBottomLeftRadius: 60,
                            width: '100%',
                            margin: 20,
                            padding: PixelRatio.getPixelSizeForLayoutSize(3),
                        }}
                        activeOpacity={1}
                        onPress={() => refSizeSheet.current.open()}
                    >
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginStart: 20}}>
                            <View style={{backgroundColor: '#004492',}}>
                                <Image source={require('../../assets/size.png')} style={{width: PixelRatio.getPixelSizeForLayoutSize(8), height: PixelRatio.getPixelSizeForLayoutSize(8)}}/>
                            </View>
                            <View style={{marginLeft: 12}}>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'white',
                                    marginVertical: PixelRatio.getPixelSizeForLayoutSize(1)
                                }}>Size</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>{size}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '60%'
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#1B77DF',
                            borderTopRightRadius: 60,
                            borderBottomRightRadius: 60,
                            width: '80%',
                            margin: 20,
                            padding: PixelRatio.getPixelSizeForLayoutSize(3),
                        }}
                        activeOpacity={1}
                        onPress={() => refRegionSheet.current.open()}
                    >
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <Icon name="map-marker" color='#fff' size={25.5} style={{marginVertical: PixelRatio.getPixelSizeForLayoutSize(2)}}/>
                            <Text style={{color: 'white', fontSize: 14,  fontFamily: 'lato-Bold', fontWeight: 'bold', marginLeft: PixelRatio.getPixelSizeForLayoutSize(3)}}>{
                                region === "" ? "Indonesia" : region
                            }</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={MainStyle.container}>
            <Text style={MainStyle.priceTitle}>Harga Terbaru</Text>
            { loading ?
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <ActivityIndicator size="large" />
                </View> : <PriceItem data={dataPrice} size={size} region={region}/>
            }
            {_renderBottomButton()}
            <SizeBottomSheet sizeRef={refSizeSheet} onSizeFilter={_sizeFiltering}/>
            <RegionBottomSheet
                refRegion={refRegionSheet}
                listRegion={regionListData}
                onRegionClick={_regionFiltering}
                onRegionSearch={_searchRegion}
                loadRegion={loadRegion}
                loadMore={loadMoreRegion}
                onLoadMoreRegion={_loadMoreRegionList}
            />
        </View>
    )
}

function mapStateToProps(state) {
    return {
        dataPrice: state.priceStore.listData,
        loading: state.priceStore.loading,
        regionListData: state.regionStore.data,
        loadRegion: state.regionStore.loading,
        loadMoreRegion: state.regionStore.loadMore
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListData: (limit, page) => dispatch(getListPriceShrimp(limit, page)),
        getListRegionData: (city) => dispatch(getListRegion(city)),
        searchData: (region, size) => dispatch(searchListPrice(region, size)),
        loadMoreRegionList: (city, page) => dispatch(loadMoreRegion(city, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PricePage)