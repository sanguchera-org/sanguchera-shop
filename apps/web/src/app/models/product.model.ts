export interface Product {
    id: string;
    name: string;
    base_color: string;
    description: string;
    stock: number;
    price: number;
    images: Array<string>;
  }