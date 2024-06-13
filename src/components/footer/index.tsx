import { Form2 } from "@/ui/forms"
import Image from "next/image"

import styles from './Footer.module.scss'

export default function Footer () {
    return (
        <div className={styles.main}>
        <Form2/>
            <div className={styles.footer}>
            <div className={styles.footerContainer}>
                    <div className={styles.footerColumn1}>
                        <Image src='logo.svg' alt='logo' width={165} height={68}/>
                        <p>г. Нижневартовск,
                            ул. Индустриальная, д.7 стр. 1
                            ТЦ “ВДНХ”, 2 этаж,
                            бутик № 20а</p>
                    </div>
                    <div className={styles.footerColumn2}>
                        <span className={styles.footerColumn2Title}>Разделы:</span>
                        <p>Каталог товаров</p>
                        <p>Кухонные модули</p>
                        <p>Декоры МДФ/ЛДСП</p>
                        <p>Готовые решения</p>
                    </div>
                    <div className={styles.footerColumn3}>
                        <span className={styles.footerColumn3Title}>Контакты:</span>
                            <div className={styles.footerContainer2}>
                                <Image src='footerPictures/mailIcon.svg' alt='' width={22} height={16}/>
                                <p>vk.com/kuhninv</p>
                            </div>
                            <div className={styles.footerContainer3}>
                                <Image src='footerPictures/phoneIcon.svg' alt='' width={22} height={22}/>
                                <p>8 (3466) 68-20-15</p>
                            </div>
                            <div className={styles.footerContainer3}>
                                <Image className={styles.invisible} src='footerPictures/phoneIcon.svg' alt='' width={22} height={22}/>
                                <p>8 (3466) 68-15-98</p>
                            </div>
                    </div>
                    <div className={styles.footerColumn4}>
                        <div className={styles.footerContainer4}>
                            <Image src='footerPictures/vkIcon.svg' alt='' width={22} height={12}/>
                            <p>vk.com/kuhninv</p>
                        </div>
                        <div className={styles.footerContainer5}>
                            <Image src='footerPictures/okIcon.svg' alt='' width={16} height={20}/>
                            <p>ok.ru/kuhninv</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}