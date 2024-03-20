import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";
import dot from '../assets/dot.png'

const UserInfo =(props)=>{
    return(
        <View style={style.container}>
            <View style={style.usercontainer}>
                <Image
                source={props.userImage}
                style={style.image}
                />
            </View>

            <Text style={style.username}>{props.username}</Text>

            <View style={style.description}>
                <Text style={style.userinfo}>{props.userpost}</Text>
                <Image
                source={dot}
                style={{width:10,height:10}}
                />
                <Text style={style.userinfo}>{props.userlocation}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'rgba(110, 149, 127, 0.2)',
        paddingVertical:10,
    },
    usercontainer:{
        marginBottom:15
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'gray',
        borderWidth:1,
        marginHorizontal:10,
        
    },
    username:{
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:10,
    },
    description:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginBottom:20
    },
    userinfo:{
        fontSize:15,
        color:'gray'
    }
})

export default UserInfo