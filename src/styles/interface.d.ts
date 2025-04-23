import { GlobalStyles } from "./global";

declare module "react-native" {
  interface GlobalStylesType {
    button: typeof GlobalStyles.button;
    text: typeof GlobalStyles.text;
    container: typeof GlobalStyles.container;
  }
}
