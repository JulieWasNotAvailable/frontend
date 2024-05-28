import styles from './Cards.module.scss';
import Image from 'next/image';

export default function CardLDSP() {
    return (
        <div className={styles.card1}>
            <Image className={styles.card1Image}src='/boardplywood-1.png' alt='wood texture picture'
            width={136} height={120}/>
            <p className={styles.card1Title}>ЛДСП</p>
            <p className={styles.card1Text}>
                - Хорошая устойчивость к температурным перепадам и высокой влажности.<br/><br/>
                - Большой выбор различных цветов.
                    Как и в случае с МДФ, у ЛДСП имеется огромное разнообразие ламинированных поверхностей.<br/><br/>
                - Материал не деформируется в результате механических повреждений.<br/><br/>
                - Материал имеет хорошую устойчивость к царапинам.
                    Кроме того, его можно чистить различными химическими средствами.<br/><br/>
            </p>
            <button className={styles.card1Button}>Рассчитать стоимость</button>
        </div>
    )
}