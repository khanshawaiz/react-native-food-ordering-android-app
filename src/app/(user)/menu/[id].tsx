import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import products from "@data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from '../../../providers/CartProvider';

// ✅ Type the sizes array with the union type
const sizes: ('S' | 'M' | 'L' | 'XL')[] = ['S', 'M', 'L', 'XL'];

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  // ✅ Type selectedSize with the union type
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('S');
  const { addItem } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
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