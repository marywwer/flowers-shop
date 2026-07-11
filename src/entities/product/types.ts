export type ProductCategory =
  | 'roses'
  | 'peonies'
  | 'tulips'
  | 'mixed'
  | 'plants';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: ProductCategory;
  rating: number;
  reviewsCount: number;
  isAvailable: boolean;
  isNew?: boolean;
  isPopular?: boolean;
};

export type CartProduct = Product & {
  quantity: number;
};