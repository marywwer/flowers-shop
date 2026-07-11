import { Product } from '../../entities/product/types';

export const products: Product[] = [
  {
    id: 'pink-cloud',
    title: 'Розовое облако',
    description: 'Воздушный букет из розовых роз, эустомы и нежной зелени.',
    price: 4590,
    oldPrice: 5190,
    image:
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
    category: 'roses',
    rating: 4.9,
    reviewsCount: 38,
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'peony-morning',
    title: 'Пионовое утро',
    description: 'Нежный сезонный букет с пионами в молочно-розовой гамме.',
    price: 5890,
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80',
    category: 'peonies',
    rating: 5,
    reviewsCount: 24,
    isAvailable: true,
    isNew: true,
  },
  {
    id: 'spring-letter',
    title: 'Весеннее письмо',
    description: 'Яркие тюльпаны для тех, кто соскучился по весне.',
    price: 2990,
    image:
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80',
    category: 'tulips',
    rating: 4.8,
    reviewsCount: 17,
    isAvailable: true,
  },
  {
    id: 'berry-dessert',
    title: 'Ягодный десерт',
    description: 'Сборный букет с выразительными ягодными оттенками.',
    price: 3990,
    image:
      'https://images.unsplash.com/photo-1494336956603-39a3641f1d4d?auto=format&fit=crop&w=900&q=80',
    category: 'mixed',
    rating: 4.7,
    reviewsCount: 31,
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'white-pearl',
    title: 'Белая жемчужина',
    description: 'Светлый минималистичный букет для особенного события.',
    price: 4290,
    image:
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=900&q=80',
    category: 'mixed',
    rating: 4.9,
    reviewsCount: 19,
    isAvailable: false,
  },
  {
    id: 'home-garden',
    title: 'Домашний сад',
    description: 'Композиция из живых растений в декоративном кашпо.',
    price: 3490,
    image:
      'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&w=900&q=80',
    category: 'plants',
    rating: 4.6,
    reviewsCount: 12,
    isAvailable: true,
  },
];