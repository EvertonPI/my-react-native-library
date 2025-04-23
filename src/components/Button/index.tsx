import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../../styles/global";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={GlobalStyles.button}>
      <Text style={GlobalStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
