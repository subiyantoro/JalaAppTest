import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    FlatList,
    PixelRatio,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {loadMoreRegion} from "../actions/region";
import FooterList from "../extra/FooterList";

const RegionBottomSheet = ({refRegion, listRegion, onRegionClick, onRegionSearch, loadRegion, loadMore, onLoadMoreRegion}) => {
    let [page, setPage] = useState(1)
    const _renderSizeItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onRegionClick(item.id, item.name)
                    refRegion.current.close()
                }}
                style={{
                    marginVertical: PixelRatio.getPixelSizeForLayoutSize(6),
                }}>
                <Text key={index} style={{
                    fontSize: 14,
                    color: '#454646',
                    fontFamily: 'Lato-Regular'
                }}>{item.full_name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <RBSheet
            ref={refRegion}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={PixelRatio.getPixelSizeForLayoutSize(250)}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0, 0, 0, 0.28)",
                },
                container: {
                    borderRadius: 16,
                    paddingHorizontal: 16
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}
        >
            <View style={{flexDirection: "column", borderBottomColor: '#ececec', borderBottomWidth: 2, paddingVertical: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Lato-Regular',
                        fontWeight: "700"
                    }}>Kota/Kabupaten</Text>
                    <Text
                        onPress={() => refRegion.current.close()}
                        style={{
                            fontSize: 14,
                            fontFamily: 'Lato-Bold',
                            color: '#1B77DF'}}
                    >Tutup</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(citySearch) => onRegionSearch(citySearch)}
                    placeholder="Cari"
                    inlineImageLeft="search"
                    keyboardType="numeric"
                />
            </View>
            {
                loadRegion ?
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" />
                    </View> :
                    <FlatList
                        data={listRegion}
                        renderItem={_renderSizeItem}
                        ListFooterComponent={FooterList(loadMore)}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            setPage(page++)
                            if (!loadMore) {
                                onLoadMoreRegion(page)
                            }
                        }}
                        style={{marginVertical: PixelRatio.getPixelSizeForLayoutSize(2)}}
                    />
            }
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
        borderWidth: 0.5,
        borderColor: '#cecece',
        backgroundColor: '#E5E5E5',
        padding: 10,
        borderRadius: 4
    },
});

export default RegionBottomSheet