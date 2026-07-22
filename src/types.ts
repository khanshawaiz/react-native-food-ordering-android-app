export type Product = {
  id: number;
  image: string | null;
  name: string;
  price: number;
};

export interface OrderItem {
  id: number;
  order_id: number;
  size: string;
  quantity: number;
  product_id: number;
  product: Product;  // singular
}
export interface Order {
  id: number;
  created_at: string;
  total: number;
  status: string;
  user_id: string;
  order_items: OrderItem[];
}
export type CartItem = {
  id: string;
  product: Product;
  size: 'S' | 'M' | 'L' | 'XL';
  quantity: number;
};