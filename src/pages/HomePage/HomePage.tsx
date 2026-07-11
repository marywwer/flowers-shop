import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../entities/product/types';
import { mockProductsApi } from '../../shared/api/mockProductsApi';
import { ProductCard } from '../../widgets/ProductCard/ProductCard';
import { Header } from '../../widgets/Header/Header';
import { Button } from '../../ui/Button/Button';
import { Snackbar } from '../../ui/Snackbar/Snackbar';
import styles from './Styles.module.scss';

export const HomePage = () => {
  const navigate = useNavigate();

  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [snackbarItems, setSnackbarItems] = useState<
    Array<{
      id: number;
      title?: string;
      message: string;
      leaving?: boolean;
    }>
  >([]);

  const redirectTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const loadPopularProducts = async () => {
      try {
        const data = await mockProductsApi.getPopularProducts();
        setPopularProducts(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularProducts();
  }, []);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current !== null) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const handleCloseSnackbar = (id: number) => {
    setSnackbarItems((items) =>
      items.filter((item) => item.id !== id),
    );
  };

  const handleRequireAuth = () => {
    const snackbarId = Date.now();

    setSnackbarItems([
      {
        id: snackbarId,
        title: 'Требуется авторизация',
        message: 'Войдите, чтобы добавлять товары',
      },
    ]);

    redirectTimeoutRef.current = window.setTimeout(() => {
      setSnackbarItems([]);
      navigate('/login');
    }, 1200);
  };

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Цветы с характером</p>

            <h1>
              Букеты, которые говорят вместо тысячи сообщений
            </h1>

            <p className={styles.heroText}>
              Собираем современные букеты и доставляем их
              бережно, красиво и точно к нужному моменту.
            </p>

            <div className={styles.heroActions}>
              <Link to="/products">
                <Button type="button">
                  Смотреть букеты
                </Button>
              </Link>

              <a
                className={styles.secondaryLink}
                href="#popular"
              >
                Популярные композиции
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1100&q=80"
              alt="Розовый букет цветов"
            />

            <div className={styles.heroNote}>
              <strong>Доставка день в день</strong>
              <span>При заказе до 17:00</span>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <article>
            <strong>Свежие цветы</strong>
            <span>
              Получаем поставки несколько раз в неделю
            </span>
          </article>

          <article>
            <strong>Фото перед доставкой</strong>
            <span>
              Покажем готовый букет перед отправкой
            </span>
          </article>

          <article>
            <strong>Бережная доставка</strong>
            <span>
              Передаём композицию в фирменной упаковке
            </span>
          </article>
        </section>

        <section
          className={styles.popular}
          id="popular"
        >
          <div className={styles.sectionHeader}>
            <div>
              <p>Выбор покупателей</p>
              <h2>Популярные букеты</h2>
            </div>

            <Link to="/products">
              Смотреть все
            </Link>
          </div>

          {isLoading ? (
            <p>Загружаем букеты...</p>
          ) : (
            <div className={styles.productsGrid}>
              {popularProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRequireAuth={handleRequireAuth}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Snackbar
        items={snackbarItems}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};