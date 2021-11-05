import React from "react";
import {PixelRatio, StyleSheet} from "react-native";

const MainStyle = StyleSheet.create({
    container: {
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(2), backgroundColor: 'white'
    },
    cardPrice: {
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(1),
        marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    priceTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#004492",
        marginVertical: 18,
        fontWeight: "700",
        fontFamily: 'Lato-Regular'
    },
    newsTitle: {
        textAlign: "left",
        fontSize: 18,
        color: "#004492",
        marginVertical: 18,
        marginHorizontal: 12,
        fontWeight: "700",
        fontFamily: 'Lato-Regular'
    },
    cardBody: {
        flex: 1,
        flexDirection: "column",
    },
    infoCreator: {
        flex: 1,
        flexDirection: "column",
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(4)
    },
    supplierText: {
        fontSize: 12,
        color: '#859ED1',
        fontFamily: 'Lato-Regular'
    },
    containerPlace: {
        height: 72,
        backgroundColor: 'white',
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
        justifyContent: 'center'
    }
})

export default MainStyle