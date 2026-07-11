import { CartProduct } from '../../entities/product/types';
import { Button } from '../../ui/Button/Button';
import { useCartStore } from '../../store/cart/useCartStore';
import styles from './CartItem.module.scss';

type CartItemProps = {
  product: CartProduct;
};

export const CartItem = ({ product }: CartItemProps) => {
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <article className={styles.item}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <button
          className={styles.remove}
          type="button"
          onClick={() => removeFromCart(product.id)}
        >
          Удалить
        </button>
      </div>

      <div className={styles.quantity}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => decreaseQuantity(product.id)}
        >
          −
        </Button>

        <span>{product.quantity}</span>

        <Button
          variant="secondary"
          type="button"
          onClick={() => increaseQuantity(product.id)}
        >
          +
        </Button>
      </div>

      <strong className={styles.price}>
        {(product.price * product.quantity).toLocaleString(
          'ru-RU'
        )}{' '}
        ₽
      </strong>
    </article>
  );
};