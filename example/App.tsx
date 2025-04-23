import React from "react";

import { Button } from "my-react-native-library";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
      <Button onPress={() => console.log("Pressed")} title={"aperte aqui"} />
    </View>
  );
}
