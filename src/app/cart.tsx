import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import CartListItem from '../components/CartListItem';
import { useCart } from '../providers/CartProvider';

export default function CartScreen() {
  const { items, total } = useCart();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Cart', headerTitleAlign: 'center' }} />
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});