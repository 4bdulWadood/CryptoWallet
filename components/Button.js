import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../configs/colors.js';


const AppButton = ({ onPress, title, type }) => (
    <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, type==="lite"?{ backgroundColor: colors.primaryBackground }:{ backgroundColor: colors.primaryColor}]}>
        <Text style={[styles.appButtonText, type==="lite"?{color: colors.primaryColor}:{color: colors.primaryBackground}]}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius:10,
        paddingVertical: 15,
        paddingHorizontal: 80,
        paddingBottom: 18,
        marginTop: "20%"
    },
    appButtonText: {
        fontSize: 18,
        fontWeight: "900",
        alignSelf: "center",
    }
});

export default AppButton;