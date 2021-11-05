import React, {useEffect, useRef, useState} from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {FlatList, PixelRatio, Text, TouchableOpacity, View} from "react-native";

const SizeBottomSheet = ({sizeRef, onSizeFilter}) => {
    const [size, setSize] = useState([])

    const _sizing = () => {
        for (let i = 20; i <= 200; i += 10) {
            setSize(size => [...size, i])
        }
    }

    const _renderSizeItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onSizeFilter(item)
                    sizeRef.current.close()
                }}
                style={{
                    marginVertical: PixelRatio.getPixelSizeForLayoutSize(6),
                }}>
                <Text key={index} style={{
                    fontSize: 14,
                    color: '#454646',
                    fontFamily: 'Lato-Regular'
                }}>{item}</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        _sizing()
    }, [])

    return (
        <RBSheet
            ref={sizeRef}
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
            <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomColor: '#ececec', borderBottomWidth: 2, paddingVertical: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'Lato-Regular',
                    fontWeight: "700"
                }}>Size</Text>
                <Text
                    onPress={() => sizeRef.current.close()}
                    style={{
                        fontSize: 14,
                        fontFamily: 'Lato-Bold',
                        color: '#1B77DF'}}
                >Tutup</Text>
            </View>
            <FlatList data={size} renderItem={_renderSizeItem} style={{marginVertical: PixelRatio.getPixelSizeForLayoutSize(2)}}/>
        </RBSheet>
    )
}

export default SizeBottomSheet