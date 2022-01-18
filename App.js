import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterComponent from "./src/RegisterComponent";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
   <View>
      <Text> HomeScreen, Do you want to join the lottery? </Text>
      <View style={styles.buttons}>
        <Button color="silver" 
        title="Register"
        onPress={() =>
          navigation.navigate("Register", { id: 82, name: "Benny" })
        }
      />
{/*
      <Button color="silver"
        title="Item of the month"
        onPress={() => navigation.navigate("Item")}
      />*/}
    </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Do you want to join the lottery and make a difference at the same time?",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterComponent}
          options={{
            title: "REGISTER",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="Item"
          getComponent={() => require("./src/ItemComponents").default}
          options={{
            title: "ITEM",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nameBox: {
    width: 500,
    height: 40,
    backgroundColor: "#FE872D",
    marginBottom: 10,
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },

  buttons: {
    width: 230,
    height: 40,

    margin: 10,
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
