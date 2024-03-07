import { View, Text, StyleSheet, Platform, StatusBar, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import fonts from '../utils/globals/fonts'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title="Oh My Cup",navigation={navigation}}) => {

    return  <View style={styles.container}>
                {navigation.canGoBack &&
                                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                                    <AntDesign name="arrowleft" size={25} color="white" />
                                </Pressable>}
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.brown1,
        height:150,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 30,
        position: "relative"
    },
    text:{
        fontSize:30,
        fontFamily: fonts.PoppinsBold,
        marginBottom: 15,
    },
    goBack: {
        position: "absolute",
        left: 10,
        bottom: 15
    }
})