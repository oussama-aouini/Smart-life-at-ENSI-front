import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LendBookScreen from "../screens/LendBookScreen";
import QRScannerScreen from "../screens/QRScannerScreen";

const Stack = createStackNavigator();
const TestNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LendBookScreen" component={LendBookScreen} />
    <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} />
  </Stack.Navigator>
);

export default TestNavigator;