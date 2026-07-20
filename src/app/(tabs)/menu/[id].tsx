import { View, Text } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: 'Details' +id}} />

      <Text style={{ fontSize: 20 }}>Product Details for id: {id}</Text>
    </View>
  );
};

export default ProductDetails;