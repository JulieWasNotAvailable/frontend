import styles from './ButtonStylesP1S4.module.scss'

export default function ButtonStyles ({name}) {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>{name}</button>
        </div>
    )
}