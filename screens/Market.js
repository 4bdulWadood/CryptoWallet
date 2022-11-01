import React, {useState, useContext, useMemo, useRef} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { SAMPLE_DATA } from '../assets/data/sampleData';
import {  
    BottomSheetModal,
    BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import Chart from '../components/Chart'
import { PracticeContext } from '../Context/PracticeContext';

const Market = () => {
    let [selectedCoinData, setSelectedCoinData] = useState({current_price: 0, image: "", name: "", price_change_percentage_7d_in_currency: 0, sparkline_in_7d: {price: 0}, symbol: {}});
    const {item, setItem} = useContext(PracticeContext);
    setItem(selectedCoinData);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(()=>['100%'], []);

    const openModal = (item) => {
        setSelectedCoinData(item);
        
        setItem(selectedCoinData);
        //State is not working inside <BottomSheetModal> Component.
        //Implementing Context API to pass selectedCoinData to the Chart Screen Component


        bottomSheetModalRef.current.present();
    }

    return (
        <BottomSheetModalProvider>
        <View>
            <Image style={{marginLeft: "17%", marginTop: "6%", marginBottom: "8%" }} source={require('../assets/images/Transactions.png')} />
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

export default Market;

const styles = StyleSheet.create({
        list: {
            width: "85%",
            marginLeft: "8%"
        }
})