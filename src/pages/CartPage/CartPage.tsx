import { Link } from 'react-router-dom';
import { Header } from '../../widgets/Header/Header';
import { CartItem } from '../../widgets/CartItem/CartItem';
import { Button } from '../../ui/Button/Button';
import { useCartStore } from '../../store/cart/useCartStore';
import styles from './Styles.module.scss';

export const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const productsPrice = items.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  const deliveryPrice = productsPrice >= 5000 ? 0 : 390;
  const totalPrice = productsPrice + deliveryPrice;

  if (items.length === 0) {
    return (
      <>
        <Header />

        <main className={styles.empty}>
          <div className={styles.emptyIcon}>♡</div>

          <h1>Корзина пока пуста</h1>

          <p>
            Кажется, ни один букет ещё не был похищен в вашу
            корзину.
          </p>

          <Link to="/products">
            <Button type="button">
              Перейти к букетам
            </Button>
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.pageHeader}>
          <div>
            <p>Ваш заказ</p>
            <h1>Корзина</h1>
          </div>

          <button
            className={styles.clear}
            type="button"
            onClick={clearCart}
          >
            Очистить корзину
          </button>
        </div>

        <div className={styles.layout}>
          <section className={styles.items}>
            {items.map((product) => (
              <CartItem
                key={product.id}
                product={product}
              />
            ))}
          </section>

          <aside className={styles.summary}>
            <h2>Сумма заказа</h2>

            <div className={styles.summaryRow}>
              <span>Товары</span>
              <strong>
                {productsPrice.toLocaleString('ru-RU')} ₽
              </strong>
            </div>

            <div className={styles.summaryRow}>
              <span>Доставка</span>
              <strong>
                {deliveryPrice === 0
                  ? 'Бесплатно'
                  : `${deliveryPrice} ₽`}
              </strong>
            </div>

            {productsPrice < 5000 && (
              <p className={styles.deliveryNote}>
                До бесплатной доставки осталось{' '}
                {(5000 - productsPrice).toLocaleString('ru-RU')}{' '}
                ₽
              </p>
            )}

            <div className={styles.total}>
              <span>Итого</span>
              <strong>
                {totalPrice.toLocaleString('ru-RU')} ₽
              </strong>
            </div>

            <Button type="button">
              Перейти к оформлению
            </Button>

            <p className={styles.caption}>
              Оформление заказа добавим на следующем этапе.
            </p>
          </aside>
        </div>
      </main>
    </>
  );
};