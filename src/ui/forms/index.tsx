import styles from './Forms.module.scss'
import Image from 'next/image'

export default function Form1() {
    return (
        <div className={styles.container3}>
            <div className={styles.form1Container}>
                <div className={styles.containerTitle}>
                    <p className={styles.form1Title}>Есть замер или эскиз кухни, или просто нашли фото кухни в интернете которая Вам нравится?</p>
                    <p className={styles.form1Subtitle}>Отправьте его нам и мы посчитаем стоимость с учетом Ваших пожеланий!</p>
                </div>
                    <form className={styles.form1Fields} action="/">
                        {/* <label className={styles.} htmlFor='fname'>First name:</label> */}
                            <input className={styles.form1Field} type="text" id="fname" name="fname" placeholder='Ваше имя'/>
                        {/* <label className={styles.} htmlFor='phone'>Last name:</label> */}
                            <input className={styles.form1Field} type="tel" id="phone" name="phone" placeholder='+7(_ _ _) _ _ _-_ _ - _ _ '/>
                        <div className={styles.container1}>
                            <Image src='/paperClip-icon.svg' alt='paper clip icon' width={50} height={50}/>
                            <p className={styles.form1Text}>Вы можете приложить эскиз или фото</p>
                        </div>    
                        <div className={styles.container2}>
                            <input className={styles.button} type="submit" id="submit" value="Рассчитать стоимость"/>
                            <p className={styles.buttonDisclaimer}>Нажимая кнопку “Рассчитать стоимость”, вы соглашаетесь с условиями Политики конфиденциальности</p>
                        </div>
                    </form> 
            </div>
            <Image src='/medium-kitchen1.png' alt='kitchen image' width={360} height={275}/>
        </div>
    )
}

export function Form1Mobile() {
    return(
        <div className={styles.mobile}>
            <p className={styles.mobileForm1Title}>Есть замер или эскиз кухни, или просто нашли фото кухни в интернете которая Вам нравится?</p>
            <Image src='/medium-kitchen1.png' alt='kitchen image' width={256} height={196}/>
            <p className={styles.mobileForm1Subtitle}>Отправьте его нам и мы посчитаем стоимость с учетом Ваших пожеланий!</p>
            <form className={styles.mobileForm1Fields} action="/">
                        
                            <input className={styles.mobileForm1Field} type="text" id="fname" name="fname" placeholder='Ваше имя'/>
                        
                            <input className={styles.mobileForm1Field} type="tel" id="phone" name="phone" placeholder='+7(_ _ _) _ _ _-_ _ - _ _ '/>
                        <div className={styles.mobileForm1Container1}>
                            <Image src='/paperClip-icon.svg' alt='paper clip icon' width={50} height={50}/>
                            <p className={styles.mobileForm1Text}>Вы можете приложить эскиз или фото</p>
                        </div>    
                        <div className={styles.container2}>
                            <input className={styles.button} type="submit" id="submit" value="Рассчитать стоимость"/>
                            <p className={styles.buttonDisclaimer}>Нажимая кнопку “Рассчитать стоимость”, вы соглашаетесь с условиями Политики конфиденциальности</p>
                        </div>
                    </form> 
        </div>

    )
}

export function Form2() {
    return (
        <div className={styles.form2}>
            <div className={styles.form2Container4}>
            <p className={styles.form2Title}>проконсультируем</p>
                <form className={styles.form2Container} action="/">
                    <div className={styles.form2Container6}>
                        <input className={styles.form2ContainerField} type="text" id="fname" name="fname" placeholder='Ваше имя'/> 
                        <input className={styles.form2ContainerField} type="tel" id="phone" name="phone" placeholder='+7(_ _ _) _ _ _-_ _ - _ _ '/>
                    </div>
                    <input className={styles.form2ContainerFieldBig} type="text" id="question" name="question" placeholder='Опишите вашу проблему'/>
                    <div className={styles.form2Container5}>
                        <input className={styles.form2Button} type='submit' id='submit' value='Получить консультацию'/>
                        <p className={styles.form2ButtonDisclaimer}>Нажимая кнопку &quotПолучить консультацию&quot вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности</p>
                    </div>
                </form>
            </div>
            <Image src='/footerFormKitchen.png' alt='footer kitchen' width={494} height={396}/>
        </div>
    )
}