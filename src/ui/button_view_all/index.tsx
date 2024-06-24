import styles from './ButtonViewAll.module.scss'

export default function ButtonViewAll () {
    return(
        <div>
            <a href="/catalogue">
            <button className={styles.button}>Смотреть все товары</button>
            </a>
        </div>
    )
}