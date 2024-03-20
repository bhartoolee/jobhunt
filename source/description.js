import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Description = (props) => {
    return (
        <View style={style.container}>
            <View style={style.wrapper}>
                <Image
                    source={props.image}
                    style={style.image}
                />
            </View>

            <Text style={style.text}>{props.job}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        // paddingVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'blue',
        width: 165,
        marginBottom: 20,
        height:160
    },
    wrapper: {
        padding: 16,
        borderRadius: 25,
        backgroundColor: 'rgba(97, 108, 224, 0.8)',
        marginBottom:20
    },
    image: {
        width: 20,
        height: 20,
    },
    text: {
        fontWeight: "bold"
    }
})

export default Description