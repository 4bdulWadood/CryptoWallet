import React, {useRef, useMemo, useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GlobalStyles from '../configs/styles';
import ListItem from '../components/ListItem';
import { SAMPLE_DATA } from '../assets/data/sampleData';
import {  
    BottomSheetModal,
    BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import Chart from '../components/Chart'
import { PracticeContext } from '../Context/PracticeContext';

const Portfolio = () => {
    let [selectedCoinData, setSelectedCoinData] = useState({current_price: 0, image: "", name: "", price_change_percentage_7d_in_currency: 0, sparkline_in_7d: {price: 0}, symbol: {}});
    const {item, setItem} = useContext(PracticeContext);
    setItem(selectedCoinData);
    const bottomSheetModalRef = useRef(null);

    const snapPoints = useMemo(()=>['68%'], []);

    const openModal = (item) => {
        setSelectedCoinData(item);
        
        setItem(selectedCoinData);
        //State is not working inside <BottomSheetModal> Component.
        //Implementing Context API to pass selectedCoinData to the Chart Screen Component


        bottomSheetModalRef.current.present();
    }

    return (
        <BottomSheetModalProvider>
        <View style={styles.container}>
            <View style={styles.HeaderBorderBottom}><Text style={[GlobalStyles.headerStyle, {fontSize: "40px"}]}>Hello, Syed</Text></View>
            <View style={styles.subHeader}><Text style={styles.subHeaderText}>Portfolio Balance: </Text></View>
            <View style={[styles.subHeader, {marginTop: "3%"}]}><Text style={[styles.subHeaderText, {fontSize: "30px"}]}>$100,000.00 CAD</Text></View>
            <View style={styles.Change}><Text style={styles.priceChange}>+35.5% | </Text><Text style={styles.priceChange}>+$3500.00</Text></View>
            <View style={styles.list}>
            <FlatList
                keyExtractor={(item)=> item.id}
                data={SAMPLE_DATA}
                renderItem={({item})=> (
                    <ListItem 
                        name={item.name} 
                        symbol={item.symbol} 
                        currentPrice={item.current_price} 
                        priceChangePercentage7d={item.price_change_percentage_7d_in_currency} 
                        logoUrl={item.image} 
                        onPress={()=>{
                            openModal(item)
                        }}
                    />
                )}
            />
            </View>
        </View>
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index = {0}
            snapPoints={snapPoints}
         >
            <Chart />
        </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

export default Portfolio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        paddingTop: "20%"
    },
    HeaderBorderBottom: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        width: "75%",
        paddingBottom: "3%",
        marginBottom: "7%"
    },
    subHeader: {
        width: "75%",
    },
    subHeaderText: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    Change: {
        backgroundColor: "#4AE501",
        height: "4%",
        borderRadius: "25%",
        marginTop: "3%",
        marginRight: "50%",
        flexDirection: "row",
        paddingTop: "1.5%",
        paddingHorizontal: "2%",
        marginLeft: "18%"
    },
    priceChange: {
        fontWeight: "700"
    },
    list: {
        marginTop: "5%"
    }
})