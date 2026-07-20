import {View,  ScrollView } from 'react-native';
import products from '@data/products';
import ProductListItem from '@/components/ProductListItem';

export default function Menu() {
    return (
       <ScrollView>
         <ProductListItem  product = {products[5]}  />
         <ProductListItem  product = {products[1]}  />
       </ScrollView>
  );
}





  