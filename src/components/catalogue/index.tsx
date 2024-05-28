import Card from '@/ui/catalogue_card'
import styles from './Catalogue.module.scss'
import ButtonCost from '@/ui/button_calc_cost'

export default function Catalogue(){
    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <p className={styles.textTitle}>Каталог товаров</p>
                <p className={styles.textSubtitle}>Отображаются все 6 результатов</p>
            </div>
            <div className={styles.container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className={styles.button}>
                <ButtonCost name='Показать ещё'/>
            </div>
        </div>
                    
)
}