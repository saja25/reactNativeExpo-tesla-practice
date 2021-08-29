import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from "./styles";
import { Text, View, ImageBackground } from 'react-native';
import CustomButton from "../customButton/Index"
export default Index = (props) => {
    const { name, tagline, image } = props.car.item;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subtitle}>
                    {tagline}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton buttonType='primary' buttonText="custum order" onPress={() => {
                    console.log('custum order')
                }} />
                <CustomButton buttonType='secondary' buttonText="order now" onPress={() => {
                    console.log('order now')
                }} />
            </View>
        </View>

    );
}