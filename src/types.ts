export interface Order {
  id: number;
  created_at: string;
  total: number;
  status: string; 
  user_id: string;
  order_items: any[]; 
}