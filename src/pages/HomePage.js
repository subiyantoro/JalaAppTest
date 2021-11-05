import React, {useEffect} from "react";
import TabScreen from "../configs/tab";
import GlobalFont from "react-native-global-font";
import {PixelRatio, View} from "react-native";

const HomePage = () => {
  useEffect(() => {
    let fontName = 'Lato-Bold'
    GlobalFont.applyGlobal(fontName)
  },[])
  return (
      <TabScreen />
  )
}

export default HomePage