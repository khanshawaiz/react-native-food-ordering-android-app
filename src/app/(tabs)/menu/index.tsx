import { FlatList } from 'react-native';
import { Stack } from 'expo-router';
import products from '@data/products';
import ProductListItem from '@/components/ProductListItem';

export default function Menu() {
  return (
    <>
      <Stack.Screen options={{ title: 'Menu', headerTitleAlign: 'center' }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}