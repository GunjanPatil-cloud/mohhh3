import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  selectedColor: string;
  quantity: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: 'card' | 'upi' | 'cod';
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  date: string;
  status: 'Confirmed' | 'Processing' | 'Shipped';
  trackingNumber: string;
}
