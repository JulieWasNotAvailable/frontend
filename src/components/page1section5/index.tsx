import Image from "next/image"
import styles from './page1section5.module.scss'

export default function Page1Section4 () {
    return(
        <div className={styles.main}>
            <div className={styles.card1}>
                <div className={styles.card1Title}>
                    <p className={styles.card1TitleYellow}>узнайте стоимость</p>
                </div>
                <div className={styles.card1Subtitle}>
                    <Image src='/gift.svg' alt='gift icon' width={25} height={28}/>
                    <p className={styles.card1SubtitleText}>И получите один из подарков при заказе кухни.</p>
                </div>
            </div>
            <div className={styles.card2}>
                <Image className={styles.card2Quizpicture} src='/quizpic1.png' alt='quizpic' width={620} height={560}/>
                <span className={styles.card2Score}>0/5</span>
                <div className={styles.card2Text}>
                    <hr className={styles.card2TextLine}/>
                    <div className={styles.card2Text}>
                        <p className={styles.card2TextTitle}>Ответьте на 5 вопросов и получите дизайн проект и расчет стоимость кухни </p>
                        <p className={styles.card2TextSubtitle}>+ гарантированый подарок при заказе кухни!</p>
                    </div>
                    <button className={styles.card2Button}>Узнать стоимость</button>
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.containerTitle}>- это :</p>
                <div className={styles.containerCards}>
                    <div className={styles.containerCards1}>
                        <Image src='/arms.svg' alt='hands icon' width={86} height={86}/>
                        <p className={styles.containerCards1Title}>рассрочка без переплаты</p>
                        <p className={styles.containerCards1Text}>Мы не делаем наценок. Наши цены заморожены с 2015 года</p>
                    </div>
                    <div className={styles.containerCards1}>
                        <Image src='/arms.svg' alt='hands icon' width={86} height={86}/>
                        <p className={styles.containerCards1Title}>рассрочка без переплаты</p>
                        <p className={styles.containerCards1Text}>Мы не делаем наценок. Наши цены заморожены с 2015 года</p>
                    </div>
                    <div className={styles.containerCards1}>
                        <Image src='/arms.svg' alt='hands icon' width={86} height={86}/>
                        <p className={styles.containerCards1Title}>рассрочка без переплаты</p>
                        <p className={styles.containerCards1Text}>Мы не делаем наценок. Наши цены заморожены с 2015 года</p>
                    </div>
                    <div className={styles.containerCards1}>
                        <Image src='/arms.svg' alt='hands icon' width={86} height={86}/>
                        <p className={styles.containerCards1Title}>рассрочка без переплаты</p>
                        <p className={styles.containerCards1Text}>Мы не делаем наценок. Наши цены заморожены с 2015 года</p>
                    </div>
                </div>
            </div>
        </div>
    )
}