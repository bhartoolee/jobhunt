import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Description from "./description";
import market from '../assets/market.png';
import it from '../assets/it.png';
import people from '../assets/people.png';
import shake from '../assets/shake.png';
import sales from '../assets/sales.png';
import art from '../assets/art.png';
import Second from "./second";

const Category = () => {
    return (
        <View style={style.container}>
            <Text style={style.header}>Select your job category</Text>

            <View style={style.inner}>
                <Text style={style.subtext}>select one or more categories suitable</Text>
                <Text style={style.subtext}>for your search</Text>
            </View>

            <View style={style.wrapper}>
                <View style={style.category}>
                    <Description
                        image={market}
                        job='Marketing'
                    />
                    <Second
                        image={shake}
                        job='Public Relation' />
                </View>

                <View style={style.category}>
                    <Second
                        image={people}
                        job='HR' />
                    <Description
                        image={sales}
                        job='Sales' />
                </View>

                <View style={style.category}>
                    <Second
                        image={it}
                        job='IT' />
                    <Second
                        image={art}
                        job='Design' />
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 12,
        marginTop: 36
    },
    header: {
        fontWeight: "bold",
        fontSize: 28
    },
    inner: {
        marginBottom: 30
    },
    subtext: {
        // color: 'gray',
        fontSize: 15,
        fontWeight: "300",

    },
    wrapper:{
        justifyContent:'space-between',
        flexDirection:'column'
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Category