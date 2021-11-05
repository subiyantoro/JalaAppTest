import React from "react";
import {Share, ToastAndroid} from "react-native";

export default async (url, title) => {
    try {
        const result = await Share.share({
            url: url,
            message: title,
            title: title
        })
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (e) {
        ToastAndroid.show("Error Share", 2000)
    }
}