import styles from './Card.module.scss'
import Image from 'next/image'

export default function Card() {
    return (
        <div className={styles.card}>
            <Image className={styles.img} src='/catalogueCards/loftCard.png' alt='kitchen for card' width = {360} height={260}/>
            <div className={styles.description}>
                <p className={styles.name}>Кухонный гарнитур “ЛОФТ”.<br/> Длина 2 метра</p>
                    <div className={styles.container}>
                        <div className={styles.price}>
                            <span className={styles.oldprice}>19 899 ₽</span>
                            <span className={styles.newprice}>14 900 ₽</span>
                        </div>
                        <button className={styles.buttonAdd}>
                        </button>
                    </div>   
            </div>
        </div>

    )
}