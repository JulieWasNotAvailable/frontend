import Card from '@/ui/catalogue_card'
import styles from './page1sesction2.module.scss'
import ButtonViewAll from '@/ui/button_view_all'

export default function Page1Section2(){
    return(
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
)}