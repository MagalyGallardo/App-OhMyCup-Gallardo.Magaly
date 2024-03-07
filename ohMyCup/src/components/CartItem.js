import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
                <Text style={styles.text2}>Precio: ${item.price} </Text>
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <FontAwesome
                name="remove"
                size={25}
                color="black"
              />
            </Pressable>
            
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.blackCoffee,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:"white",
        fontSize:19,
        fontFamily:fonts.PoppinsBold
    },
    text2:{
        color:"white",
        fontSize:14,
        fontFamily:fonts.PoppinsBold
    }
})