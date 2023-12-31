import {View, Pressable, Text, ScrollView,TouchableHighlight,Dimensions,Image,Alert} from 'react-native';
import { styles } from '../../style/styles';
import Title from '../../components/Title';
import { useDispatch, useSelector } from 'react-redux';

import React,{ useEffect, useState } from 'react';
import { createPayment } from '../../redux/action/PaymentAction';
import moment from 'moment';

const Prescription = ({setPrescriptionDetails, navigation}) =>{
    const dispatch = useDispatch();
    const { height } = Dimensions.get("screen");
    const prescription = useSelector((state)=>{ return state.prescription.prescription});
    console.log(prescription);
    return (
       <>
         <View style={{...styles.containerGray,position:'relative'}}>
            <Title title={"Prescription"} />
               {
                prescription && (
                    <ScrollView style={{width:"100%",height:100, paddingHorizontal:20,marginTop:20}}>
                    {
                        prescription.map((val, idx)=>(
                            <Pressable 
                            style={{width:"100%", paddingHorizontal:15,paddingVertical:15, backgroundColor:"#fff",borderRadius:10}} 
                            key={idx}
                            onPress={()=>{
                                setPrescriptionDetails(val);
                                navigation.navigate("Prescription Details");
                            }}
                            >
                                <Text style={{fontWeight:'bold'}}>Dr.{val.dentist.fullname}</Text>
                                <Text style={{fontSize:12}}>{moment(val.date).format("MMM dddd, YYYY")}</Text>
                            </Pressable>
                        ))
                    }
                </ScrollView>
                )
               }
        </View>
       </>
    );
}

export default React.memo(Prescription);