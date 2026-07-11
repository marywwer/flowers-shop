import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProduct, Product } from '../../entities/product/types';

type CartState = {
  items: CartProduct[];
  favoriteIds: string[];

  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;

  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      favoriteIds: [],

      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      increaseQuantity: (productId) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decreaseQuantity: (productId) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleFavorite: (productId) => {
        set((state) => {
          const isAlreadyFavorite =
            state.favoriteIds.includes(productId);

          return {
            favoriteIds: isAlreadyFavorite
              ? state.favoriteIds.filter((id) => id !== productId)
              : [...state.favoriteIds, productId],
          };
        });
      },

      isFavorite: (productId) => {
        return get().favoriteIds.includes(productId);
      },
    }),
    {
      name: 'flower-shop-cart',
    }
  )
);