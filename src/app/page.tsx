import Image from 'next/image';
import styles from './Main.module.scss'
import ButtonCost from '@/ui/button_calc_cost';
import Card from '@/ui/catalogue_card'
import ButtonViewAll from '@/ui/button_view_all';

export default function Page() {
  return (
  <div>
    <div className={styles.main}>
      <div>
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
              <ButtonCost/>
            <div className={styles.container3}>
              <Image className={styles.img2}src='/gift.svg' alt='gift icon' width={25} height={32}/>
              <p className={styles.text2}>Пройдите тест из 5 вопросов и получите дизайн проект, и расчет стоимость кухни + гарантированный подарок при заказе кухни!</p>
            </div>
          </div>
      </div>
      <Image src='/KITCHENS-PAGE-1920w 1.png' alt='kitchen picture' width={847} height={714}/>
    </div>
    <div className={styles.section2}>
      <p className={styles.title2}>Популярные модели</p>
      <br/>
        <div className={styles.container5}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className={styles.wrapper2}>
        <ButtonViewAll/>
        </div>
    </div>
  </div>)
}