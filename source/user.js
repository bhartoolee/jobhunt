import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import UserInfo from "./userInfo";
import Offer from "./offer";
import ball from '../assets/ball.png';
import user from '../assets/user.png';
import perfume from '../assets/perfume.png'
import badge from '../assets/badge.png';
import balloon from '../assets/balloon.png';
import spider from '../assets/spider.png'
import Offers from "./secoffer";


const User = (props) => {
    return (
        <View style={style.container}>
            <UserInfo
                userImage={user}
                username='Shodiya Basit'
                userlocation='Abeokuta,NG'
                userpost='HR Manager'
            />

            <Text style={style.header}>My job application ({props.apply})</Text>

            <View style={style.wrapper}>
                <View style={style.inside}>
                    <Image
                        source={ball}
                        style={style.image}
                    />
                </View>

                <View style={style.textwrap}>
                    <Text style={style.subheader}>{props.job}</Text>
                    <Text style={style.area}>{props.area}</Text>
                </View>

                <Text style={style.date}>{props.date} days ago</Text>
            </View>

            <Text style={style.text}>Saved offers ({props.amount})</Text>

            <View style={style.horizon}>
                <View style={style.inner}>
                    <Offer
                        image={balloon}
                        jobOffer='PR manager'
                        jobArea='bhl tech'
                    />
                    <Offers
                        image={badge}
                        jobOffer='HR Assistant'
                        jobArea='ipsum inc'
                    />
                </View>
                <View style={style.inner}>
                    <Offers
                        image={perfume}
                        jobOffer='Junior Manager'
                        jobArea='cosmetics company'
                    />
                    <Offer
                        image={spider}
                        jobOffer='Happiness CEO'
                        jobArea='Techup'
                    />
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 30
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 10,
        marginBottom: 10
    },
    wrapper: {
        marginHorizontal: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 25
    },
    inside: {
        backgroundColor: 'rgba(192, 179, 188, 0.11)',
        paddingVertical: 0,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginRight: 8,
        justifyContent: 'center'
    },
    image: {
        width: 10,
        height: 10,
    },
    textwrap: {
        paddingRight: '40%'
    },
    subheader: {
        fontWeight: "bold",
        fontSize: 18,
    },
    area: {
        color: 'gray'
    },
    date: {
        color: 'gray',
        marginTop: '5%'
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 10
    },
    horizon: {
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default User