import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import { useProduct } from "@/api/products";


const sizes: ('S' | 'M' | 'L' | 'XL')[] = ['S', 'M', 'L', 'XL'];

export default function ProductDetails() {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
  const {data: product, error, isLoading} = useProduct(id);  



  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('S');
  const { addItem } = useCart();


  

if (isLoading) {
  return <ActivityIndicator />
}
   
if (error) {
  return <Text>Failed to fetch products</Text>
}




 const addToCart = () => {
    console.log('Adding to cart');
    console.log('Size:', selectedSize);
    addItem(product, selectedSize);
};

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name, headerTitleAlign: 'center', headerShown: true }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[styles.size, { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }]}
            key={size}
          >
            <Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'gray' }]}>
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" style={{ width: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 9999,
    marginVertical: 20,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 55,
    aspectRatio: 1,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 'auto',
  },
});

