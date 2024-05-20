import styles from './ButtonCost.module.scss'

export default function ButtonCost () {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>Рассчитать стоимость</button>
        </div>
    )
}