import Button from '../button/Button';
import styles from './DescriptionBox.module.css';

export default function DescriptionBox({productData}) {
    const { name, price, price_discount, discount_percentage, currency, more_colors_available, hasDiscount } = productData;
    return (
        <>
            <p className={`${styles.product__name} margin-0 align-center`}>{name}</p>

            <p className={`${styles.product__price} margin-0 align-center ${hasDiscount ? styles.hasDiscountStyle : ""}`}>{price} {currency}</p>
            {
                hasDiscount && <p className={`${styles.product__price_discount} margin-0 align-center`}>{price_discount} {currency}(-{discount_percentage}%)</p>
            }
            <p className={`${styles.product__morecolours} align-center`}>{more_colors_available ? 'Mas colores...' : ''}</p>
            <Button styleClasses={styles.product_addtocart} buttonText={'AÑADIR'} />
        </>
    )
}
