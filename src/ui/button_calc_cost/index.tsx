import styles from './ButtonCost.module.scss'

export default function ButtonCost ({name}:{name:string}) {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>{name}</button>
        </div>
    )
}