import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

const Payments = () => {
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();
    const [email, setEmail] = useState();

    return (
        <View>
            <Text style={[styles.title, {marginTop: "10%"}]}>Amount</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="Amount"
                    secureTextEntry={true}
                />
            <Text style={styles.title}>Description</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Description"
                    secureTextEntry={true}
                />
            <Text style={styles.title}>Recepient Email</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    secureTextEntry={true}
            />
            <View style={{width: "85%", marginLeft: "7.5%"}}><Button type="dark" title="Send Via Email"/></View>
            <View style={{width: "85%", marginLeft: "7.5%", marginTop: "5%"}}><Button type="dark" title="Scan QR Code"/></View>
            <View style={{width: "85%", marginLeft: "7.5%"}}><Button type="dark" title="Receive Payments"/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 0,
        marginRight: "20%",
        marginLeft: "10%",
        borderBottomWidth: 1,
        marginBottom: "3%"
      },
      title: {
        marginLeft: "10%"
      }
})

export default Payments;