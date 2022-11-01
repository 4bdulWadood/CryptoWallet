import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, {useState} from 'react'
import { PracticeContext } from '../Context/PracticeContext';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
import Button from './Button';
export const {width: SIZE} = Dimensions.get('window');

export default function Chart() {
  const priceChangeColor = price_change_percentage_7d_in_currency < 0 ? "#34C759" : "#FF3B30";


  const {item,setItem} = React.useContext(PracticeContext);
  const {current_price, image, name, price_change_percentage_7d_in_currency, sparkline_in_7d, symbol} = item;
  console.log(current_price);
  const [amount, setAmount] = useState("");
  const formatCAD = value => {
    'worklet';
    if(value === ''){
      return `$${current_price.toLocaleString("en-CA", {currency: 'CAD'} )}`;
    }
    
    
    

    const formattedValue = `$ ${parseFloat(value).toFixed(2)}`

    return formattedValue;
  }

  return (
    <ChartPathProvider data={{points: sparkline_in_7d.price, smoothingStrategy: "bezier" }}>
    <View style={styles.chartWrapper}>
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Image source={{uri: image}} style={styles.image}/>
              <Text>{name} ({symbol})</Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
            <ChartYLabel
                format={formatCAD}
                style={styles.boldTitle}
            />
            {/* <Text style={styles.boldTitle}>${current_price.toLocaleString("en-CA", {currency: 'CAD'} )}</Text> */}
            <Text style={[styles.title, {color: priceChangeColor}]}>{price_change_percentage_7d_in_currency.toFixed(2)}%</Text>
        </View>
      </View>
    </View>

    <View style={styles.chartLineWrapper}>
      <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
      <ChartDot style={{backgroundColor: 'black'}} />
    </View>
    
    <View style={styles.Balance}>
        <View style={styles.BalanceHeader}>
          <Text style={styles.balanceTitleText}>Balance</Text>
          <Text style={styles.balanceAmountText}>12.213 {symbol.toUpperCase()}</Text>
        </View>
        <View style={[styles.BalanceHeader, {marginLeft: "20%"}]}>
        <Text style={[styles.balanceTitleText, {marginLeft: "44%"}]}>Value</Text>
        <Text style={styles.balanceAmountText}>$88000.12</Text>
        </View>
    </View>
    <View>
    <TextInput
          style={styles.input}
          onChangeText={setAmount}
          placeholder={"Amount"}
    />
    </View>

    <View style={styles.button}><Button title="Purchase" type="dark"/></View>

    </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16
  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "7%",
    marginTop: "1%"
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1"
  },
  boldTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold"
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40
  },
  chartWrapper: {
    marginVertical: 16
  },
  titlesWrapper: {
    marginHorizontal: 16
  },
  Balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  BalanceHeader: {
    marginTop: "10%",
    marginHorizontal: "10%"
  },
  balanceTitleText: {
    color: "grey",
    marginBottom: "4%"
  },
  balanceAmountText: {
    fontWeight: "600",
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 0,
    marginRight: "20%",
    marginLeft: "10%",
    borderBottomWidth: 1,
    width: "80%",
    marginTop: "5%"
  },
  button: {
    justifyContent: "center",
    marginHorizontal: "10%",
    marginVertical: "-3%"
  }
})
