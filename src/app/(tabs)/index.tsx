import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../constants/colors'; 
import products from '../../../data/products';


const product = products[7];

export default function TabOne() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style = {styles.image}  />
      <Text style = {styles.title}>{product.name}</Text>
       <Text style= {styles.price}>Just : ${product.price}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
   backgroundColor : 'white',
   padding : 10,
   borderRadius : 20,
   
 },
 image:{
 width : '100%',
 aspectRatio : 1,
 },

  title: {
   fontSize : 18,
   fontWeight: '600',
   marginVertical : 10,
   color : colors.light.tint,
  },
  price:{
    fontSize: 15,
    fontWeight: 'bold',
    color : 'green',
  },
});