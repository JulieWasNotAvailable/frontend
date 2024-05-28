import ButtonCost from "@/ui/button_calc_cost"
import Image from "next/image"
import styles from './page1section1.module.scss'

export default function Page1Section1 () {
    return(
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <div className={styles.titlewrapper}>
                    <p className={styles.titlept1}>Кухни в Нижневартовске от производителя </p><span className={styles.titlept2}>- недорого и надёжно!</span>
                </div>

                    <p className={styles.subtitle}>Изготовим и доставим кухонный гарнитур в Излучинск, Мегион, Стрежевой, Лангепас, Радужный и другие города ХМАО</p>
            
                <div className={styles.container1}>
                    <div className={styles.container2}>
                    <Image className={styles.img1} src='/arms.svg' alt='arms with a card icon' width={32} height={32}/>
                    <p className={styles.text}>Рассрочка без переплаты!</p>
                    </div>

                    <div className={styles.container2}>
                    <Image className={styles.img1} src='/triangle.svg' alt='triangle measure icon' width={32} height={32}/>
                    <p className={styles.text}>Бесплатный замер и дизайн</p>
                    </div>

                    <div className={styles.container2}>
                    <Image className={styles.img1} src='/box.svg' alt='box icon' width={32} height={32}/>
                    <p className={styles.text}>Более 500 цветов фасадов</p>
                    </div>

                    <div className={styles.container2}>
                    <Image className={styles.img1} src='/clock.svg' alt='clock icon' width={32} height={32}/>
                    <p className={styles.text}>Соблюдение сроков изготовления. Если не выполним в срок – мы заплатим Вам неустойку.</p>
                    </div>
                </div>
                <div className={styles.container4}>
                    <ButtonCost name='Рассчитать стоимость'/>
                    <div className={styles.container3}>
                    <Image className={styles.img2} src='/gift.svg' alt='gift icon' width={25} height={32}/>
                    <p className={styles.text2}>Пройдите тест из 5 вопросов и получите дизайн проект, и расчет стоимость кухни + гарантированный подарок при заказе кухни!</p>
                    </div>
                </div>
            </div>
        <Image className={styles.mainImage} src='/KITCHENS-PAGE-1920w 1.png' alt='kitchen picture' width={847} height={714}/>
    </div>       
    )
}