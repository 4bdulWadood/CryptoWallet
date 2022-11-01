import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress }) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? "green" :  "red";
    return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>

       {/*Left Side*/}
       <View style={styles.leftWrapper}>
            <Image source={{ uri: logoUrl }} style={styles.image}></Image>
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{symbol}</Text>
            </View>
       </View>

       {/*Right Side*/}
        <View style={styles.rightWrapper}>
            <Text style={styles.title}>${currentPrice.toLocaleString("en-US", {currency: 'USD'} )}</Text>
            <Text style={[styles.subtitle, {color: priceChangeColor, fontWeight: "bold"}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemWrapper: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "6%"
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        marginTop: "5%"
    },
    rightWrapper: {
        marginLeft: "25%",
        alignItems: "flex-end"
    },
    image: {
        height: 48,
        width: 48
    },
    titlesWrapper: {
        marginLeft: 8
    },
    bottomSheet: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }
})

export default ListItem