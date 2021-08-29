import React from 'react'
import { Text, View, Pressable } from 'react-native';
import styles from "./styles"

export default function Index({ buttonType, buttonText, onPress }) {
    const bgColor = buttonType === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = buttonType === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: bgColor }]}
                onPress={onPress}
            >
                <Text style={[styles.text, { color: textColor }]}
                >{buttonText}</Text>
            </Pressable>
        </View>
    )
}
