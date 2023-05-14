import React from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";

export const Loading = ()=>{
    return(
        <SafeAreaView
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator size="large" />
            <Text
              style={{
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              Its Loading ...
            </Text>
          </SafeAreaView>
    )
}