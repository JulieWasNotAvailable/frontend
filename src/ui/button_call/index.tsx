import styles from './ButtonCall.module.scss'

export default function ButtonCall () {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>Заказать звонок</button>
        </div>
    )
}