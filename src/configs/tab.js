import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PricePage from "../pages/PricePage";
import NewsPage from "../pages/NewsPage";
import DiseasesPage from "../pages/DiseasesPage";

const Tab = createMaterialTopTabNavigator()

const TabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Price"
            screenOptions={{
                tabBarInactiveTintColor: 'grey',
                tabBarActiveTintColor: '#1B77DF',
                tabBarLabelStyle: { fontSize: 14, fontFamily: 'Lato-Regular', fontWeight: 'bold', textTransform: 'none' },
                tabBarStyle: { backgroundColor: 'white' },
            }}
        >
            <Tab.Screen name="Price" component={PricePage} options={{tabBarLabel: "Harga Udang"}} />
            <Tab.Screen name="News" component={NewsPage} options={{tabBarLabel: "Kabar Udang"}} />
            <Tab.Screen name="Diseases" component={DiseasesPage} options={{tabBarLabel: "Penyakit"}} />
        </Tab.Navigator>
    )
}

export default TabScreen