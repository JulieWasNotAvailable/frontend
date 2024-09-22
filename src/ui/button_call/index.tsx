import styles from './ButtonCall.module.scss'

export default function ButtonCall ({name}:{name:string}) {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button}>{name}</button>
        </div>
    )
}