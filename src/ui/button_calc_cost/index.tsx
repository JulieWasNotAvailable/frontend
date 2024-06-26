import styles from './ButtonCost.module.scss'

export default function ButtonCost ({name}) {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>{name}</button>
        </div>
    )
}