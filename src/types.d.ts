declare module "my-react-native-library" {
  export const Button: React.FC<{
    title: string;
    onPress: () => void;
  }>;

  export const GlobalStyles: {
    container: import("react-native").ViewStyle;
    text: import("react-native").TextStyle;
    button: import("react-native").ViewStyle;
  };
}
