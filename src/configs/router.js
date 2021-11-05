import React from "react";
import {NavigationContainer, useRoute} from "@react-navigation/native"
import TabScreen from "./tab"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import NewsDetails from "../pages/NewsDetails";
import {IconButton} from "react-native-paper";
import ShareNews from "../extra/ShareNews";
import {NEWS_URL} from "./utils";
import DiseasesDetails from "../pages/DiseasesDetails";
import PriceDetails from "../pages/PriceDetails";

const Stack = createNativeStackNavigator()
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        title: "Jala Media",
                        headerStyle: {
                            backgroundColor: '#1B77DF'
                        },
                        headerTitleAlign: 'left',
                        headerTitleStyle: {
                            color: 'white'
                        }
                    }}
                />
                <Stack.Screen
                    name="NewsDetails"
                    component={NewsDetails}
                    options={({navigation, route}) => ({
                        title: "Kabar Udang",
                        headerStyle: {
                            backgroundColor: '#1B77DF'
                        },
                        headerTitleAlign: 'left',
                        headerTitleStyle: {
                            color: 'white'
                        },
                        headerTintColor: 'white',
                        headerBackTitleVisible: false,
                        headerRight: () => {
                            return (
                                <IconButton icon="share-variant" color="white" onPress={() => {
                                    ShareNews(
                                        NEWS_URL + route.params.data.id,
                                        route.params.data.title,
                                    )
                                }}/>
                            )
                        }
                    })}
                />
                <Stack.Screen
                    name="DiseasesDetails"
                    component={DiseasesDetails}
                    options={({navigation, route}) => ({
                        title: "Info Penyakit",
                        headerStyle: {
                            backgroundColor: '#1B77DF'
                        },
                        headerTitleAlign: 'left',
                        headerTitleStyle: {
                            color: 'white'
                        },
                        headerTintColor: 'white',
                        headerBackTitleVisible: false,
                        headerRight: () => {
                            return (
                                <IconButton icon="share-variant" color="white" onPress={() => {
                                    ShareNews(
                                        NEWS_URL + route.params.data.id,
                                        route.params.data.title === undefined ? route.params.data.full_name : route.params.data.title,
                                    )
                                }}/>
                            )
                        }
                    })} />
                <Stack.Screen
                    name="PriceDetails"
                    component={PriceDetails}
                    options={({navigation, route}) => ({
                        title: "Harga Udang",
                        headerStyle: {
                            backgroundColor: '#1B77DF'
                        },
                        headerTitleAlign: 'left',
                        headerTitleStyle: {
                            color: 'white'
                        },
                        headerTintColor: 'white',
                        headerBackTitleVisible: false,
                        headerRight: () => {
                            return (
                                <IconButton icon="share-variant" color="white" onPress={() => {
                                    ShareNews(
                                        NEWS_URL + route.params.data.id,
                                        route.params.data.title === undefined ? route.params.data.full_name : route.params.data.title,
                                    )
                                }}/>
                            )
                        }
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router