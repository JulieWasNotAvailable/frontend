import styles from './Card.module.scss'
import Image from 'next/image'

export class TextProps {
    name?: string;
    newPrice?: number;
    oldPrice?: number;
}

const path = 'C:/Users/1/Desktop/backend/db_images/62f87108-269b-4bd9-a938-aa5e177f8649.png'

export default function Card({name = 'Default', newPrice = 12000, oldPrice = 13000}: TextProps) {
    // name, newPrice, oldPrice = Array.from(Object.values(text));
    return (
        <div className={styles.card}>
            <Image className={styles.img} src='/catalogueCards/loftCard.png' alt='kitchen for card' width = {360} height={260}/>
            <div className={styles.description}>
                <p className={styles.name}>{name}</p>
                    <div className={styles.container}>
                        <div className={styles.price}>
                            <span className={styles.oldprice}>{oldPrice}</span>
                            <span className={styles.newprice}>{newPrice}</span>
                        </div>
                        <button className={styles.buttonAdd}>
                        </button>
                    </div>   
            </div>
        </div>

    )
}