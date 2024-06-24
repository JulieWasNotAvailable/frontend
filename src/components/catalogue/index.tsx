import Card from '@/ui/catalogue_card'
import styles from './Catalogue.module.scss'
import ButtonCost from '@/ui/button_calc_cost'

//<Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={kitchens[3][0]}/>

async function getData() {
    const res = await fetch('http://127.0.0.1:7777/kitchens')
    const json = await res.json()
    let nameList = []
    let newPriceList = []
    let oldPriceList = []
    let imageUrlList = []
    for (let i in json) {
        nameList.push(json[i].title)
        newPriceList.push(json[i].new_price)
        oldPriceList.push(json[i].old_price)
        imageUrlList.push(`http://127.0.0.1:7777/kitchens/db_images/${json[i].image}`)
    }
    console.log(imageUrlList)
       
    return ([nameList, newPriceList, oldPriceList, imageUrlList])
}

export default async function Catalogue(){

    const kitchens = await getData()

    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <p className={styles.textTitle}>Каталог товаров</p>
                <p className={styles.textSubtitle}>Отображаются все 6 результатов</p>
            </div>
            <div className={styles.container}>
            <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={kitchens[3][0]}/>
            <Card name = {kitchens[0][1]} newPrice = {kitchens[1][1]} oldPrice={kitchens[2][1]} url={kitchens[3][1]}/>
            <Card name = {kitchens[0][2]} newPrice = {kitchens[1][2]} oldPrice={kitchens[2][2]} url={kitchens[3][2]}/>
            <Card name = {kitchens[0][3]} newPrice = {kitchens[1][3]} oldPrice={kitchens[2][3]} url={kitchens[3][3]}/>
            <Card name = {kitchens[0][4]} newPrice = {kitchens[1][4]} oldPrice={kitchens[2][4]} url={kitchens[3][4]}/>
            <Card name = {kitchens[0][5]} newPrice = {kitchens[1][5]} oldPrice={kitchens[2][5]} url={kitchens[3][5]}/>
            </div>
            <div className={styles.button}>
                <ButtonCost name='Показать ещё'/>
            </div>
        </div>
                    
)
}