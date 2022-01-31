import React from "react";
import { Button, Text, View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

const RegisterComponent = ({ navigation }) => {
  /*två hooks nedanför här*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /* control (logiken) - kontroller att någonting stämmer överens , handlesumbit är funktionen och formstate kollar så att allt stämmer*/
  const {
    control,
    handleSubmit,
    formState: { errors } /*To do isDirty*/,
  } = useForm({
    defaultValues: {
      /* värdet som det kommer att börja på, första värdet brukar vvara tomt*/
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data); /*detta är en arrowfunktion*/

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.basicBackground}>
        <Text>Have a chance and make a difference...</Text>
        <Text>
          Maybe you are the winner of an exclusive bag!
          {"\n"}
        </Text>

{/*Vet inte ifall jag vill ha med ScrollView och KeyboardAvoidingView
        <ScrollView style = {{flexGrow:1, padding: 20, backgroundColor: 'white'}} ref = 'scroll'>
<KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flexGrow: 1}}>*/}
        <View style={styles.registerInfo}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder=" Firstname"
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>Please enter first name.</Text>}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder=" Lastname"
              />
            )}
            name="lastName"
          />
          {errors.firstName && <Text>Please enter last name.{"\n"}</Text>}

          <Button
            color="#675b51"
            title="S u b m i t"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        {/*}
        </KeyboardAvoidingView>
            </ScrollView>*/}
      </View>

      <View style={styles.basicBackground}>
      <Text
          style={{
            color: "black",
            fontSize: 16,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Click on the button below to see
          {"\n"}which bag you can win.
          {"\n"}
          {"\n"}
        </Text>
        <View style={styles.buttons}>
          <Button
            color="#675b51"
            title="B a g   o f   t h e   m o n t h"
            onPress={() => navigation.navigate("Item")}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          color="#ddd6cf"
          title="G o   t o   h o m e p a g e"
          onPress={() => navigation.popToTop()}
        ></Button>
      </View>
    </View>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  basicBackground: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  registerInfo: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 3,
    borderColor: "black",
  },
});
