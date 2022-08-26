import DescriptionBox from '../descriptionBox/DescriptionBox';
import styles from './Card.module.css';
import Image from '../image/Image';

export default function Card({product}) {
    return (
        <div className={styles.card__container}>
            <Image img_url={product.img_url} altName={product.name} styles={styles.image} />
            <div className={styles.card__description}>
                <DescriptionBox productData={product} />
            </div>
        </div>
    )
}
