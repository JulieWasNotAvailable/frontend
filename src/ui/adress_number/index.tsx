import Image from "next/image"
import styles from "./AdressNumber.module.scss"

export default function SubHeader () {
    return(
        <div className={styles.mainwrapper}>
            <div className={styles.container}>
                <div className={styles.adresswrapper}>
                    <Image src='/location-icon.svg' alt='location icon' width={12} height={16}/>
                    <span className={styles.adress}>г. Нижневартовск, ул. Индустриальная, д.7 стр. 1 ТЦ “ВДНХ”, 2 этаж, бутик № 20а</span>
                </div> 
                <div className={styles.phonewrapper}>
                    <Image src='/phone-icon.svg' alt='phone icon' width={26} height={26}/>
                    <span className={styles.phone}> +7 (3466) 68-15-98</span>
                </div>
            </div>
        </div>
    )
}