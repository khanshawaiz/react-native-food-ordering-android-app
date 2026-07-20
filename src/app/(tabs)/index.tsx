import {View} from 'react-native';
import products from '../../../data/products';
import ProductListItem from '../../../src/components/ProductListItem';

export default function Menu() {
    return (
       <View>
         <ProductListItem  product = {products[0]}  />
         <ProductListItem  product = {products[1]}  />
       </View>
  );
}

