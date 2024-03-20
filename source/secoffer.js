import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import flag from '../assets/flag.png'

const Offers = (props) => {
    return (
        <View style={style.container}>
            <View style={style.inner}>
                <View style={style.imgcontainer}>
                    <Image
                        style={style.image}
                        source={props.image}
                    />
                </View>
                <Image
                    style={style.flag}
                    source={flag}
                />
            </View>

            <Text style={style.job}>{props.jobOffer}</Text>
            <Text style={style.area}>{props.jobArea}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 12,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        width: '47%',
        marginVertical: 5
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imgcontainer: {
        padding: 12,
        backgroundColor: 'rgba(146, 231, 72, 0.11)',
        justifyContent: 'center',
        borderRadius: 6,
    },
    image: {
        width: 12,
        height: 12
    },
    flag: {
        width: 16,
        height: 12,
    },
    job: {
        fontSize: 17,
        fontWeight: "bold"
    },
    area: {
        color: 'gray'
    }
})

export default Offers