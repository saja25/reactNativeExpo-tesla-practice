import React from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native';
import styles from "./styles"
import cars from "./cars"
import CarComponent from "../carComponent/Index"

export default function Index() {

    return (
        <View style={styles.container}>
            <FlatList data={cars}
                renderItem={(item) =>
                    <CarComponent car={item} />}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}
