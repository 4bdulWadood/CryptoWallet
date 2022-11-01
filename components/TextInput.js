
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import React, { useState } from 'react'
//Selected input field and input field icon changes color to primaryColor (purple)
export default function textInput({iconName, placeholder}) {
    const [text, onChangeText] = useState(placeholder);

    return (
      <View style={styles.container}>
            <TextInput
                style={styles.textField}
                onChangeText={onChangeText}
                value={text}
                clearTextOnFocus={true}
                placeholder={placeholder}
            />
      </View>
    );
  }

  const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            flex: 1
        }
        
  });