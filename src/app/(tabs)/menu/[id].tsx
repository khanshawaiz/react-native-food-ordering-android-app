import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import products from "@data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name, headerTitleAlign: 'center', headerShown: true}} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.price}>${product.price}</Text>
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
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});