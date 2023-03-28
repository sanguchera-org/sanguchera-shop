import { Product } from './product.model';

export type Cart = CartItem[];

export interface CartItem {
  quantity: number;
  product: Product;
}
