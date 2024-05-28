import CardLDSP from "@/ui/cards"
import Image from "next/image"

import styles from './page1section7.module.scss'

export default function Page1Section7 () {
    return(
        <div className={styles.main}>
            <p className={styles.title}>Производство</p>
            <div className={styles.container}>
                <Image className={styles.image} src='/factoryPictures/1.svg' alt='factory picture 1' width={493} height={476}/>
                <Image className={styles.image} src='/factoryPictures/2.svg' alt='factory picture 2' width={390} height={454}/>
                <Image className={styles.image} src='/factoryPictures/3.svg' alt='factory picture 3' width={490} height={427}/>
                <Image className={styles.image} src='/factoryPictures/4.svg' alt='factory picture 4' width={572} height={321}/>
            </div>
            
        </div>
    )
}