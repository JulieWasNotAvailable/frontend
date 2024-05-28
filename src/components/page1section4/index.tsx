import styles from './page1section4.module.scss'

import ButtonStyles from "@/ui/button_styles";
import Form1 from '@/ui/forms';

import Image from "next/image";


export default function Page1Section4 () {
    return(
        <div className={styles.section4}>
                <div className={styles.title}>
                    <p className={styles.titleBlack}>Выбор</p>
                    <p className={styles.titleYellow}>Кухни по стилям</p>
                </div>
                <p className={styles.text}>
                    Красивые, удобные и современные, кухни на заказ помогают создавать атмосферу уюта и комфорта в помещении.
                    Вы хотите воплотить в жизнь мечты об удобном гарнитуре? Мы готовы вам в этом помочь.
                </p>
                <div className={styles.container}>
                    <p className={styles.smalltext}>
                        Выберите стиль:
                    </p>
                    <div className={styles.container2}>
                        <ButtonStyles name='Эконом'/>
                        <ButtonStyles name='Маленькие'/>
                        <ButtonStyles name='Классика'/>
                        <ButtonStyles name='Скандинавский'/>
                        <ButtonStyles name='Минимализм'/>
                        <ButtonStyles name='Хай-тек'/>
                        <ButtonStyles name='Лофт'/>
                        <ButtonStyles name='Прованс'/>
                    </div>
                </div>
                <div className={styles.pictures}>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                </div>
                <Form1/>
        </div>
    )
}