import { StyleSheet } from 'react-native';
import colors from './colors.js';

const GlobalStyles = StyleSheet.create({
    headerStyle: {
      fontSize: 35,
      fontWeight: "800",
      color: colors.primaryColor
    },
    subtextStyle: {
        textAlign: "center",
        color: colors.primaryColor,
        fontWeight: "700",
        width: "80%",
    }
  });


  export default GlobalStyles;