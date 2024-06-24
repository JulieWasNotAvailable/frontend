import Card from '@/ui/catalogue_card'
import styles from './page1sesction2.module.scss'
import ButtonViewAll from '@/ui/button_view_all'

async function getData() {
    const res = await fetch('http://127.0.0.1:7777/kitchens')
    const json = await res.json()
    let nameList = []
    let newPriceList = []
    let oldPriceList = []
    let imageList = []
    for (let i in json) {
        nameList.push(json[i].title)
        newPriceList.push(json[i].new_price)
        oldPriceList.push(json[i].old_price)
        imageList.push(json[i].image)
    }
    
    return ([nameList, newPriceList, oldPriceList, imageList])
}

export default async function Page1Section2(){

    const kitchens = await getData()

    const imageUrlList = []
    for (let i in kitchens[3]) {
        imageUrlList.push(`http://127.0.0.1:7777/kitchens/db_images/${kitchens[3][i]}`)
    }
    console.log(imageUrlList)
    // const imageList = [
    //     'http://127.0.0.1:7777/kitchens/db_images/brown.png', //вместо brown.png можно вставить динамический url
    //     'http://127.0.0.1:7777/kitchens/db_images/white.png',
    //     'http://127.0.0.1:7777/kitchens/db_images/raspberry.png',
    //     'http://127.0.0.1:7777/kitchens/db_images/oak.png',
    //     'http://127.0.0.1:7777/kitchens/db_images/orchid.png',
    //     'http://127.0.0.1:7777/kitchens/db_images/raspberry.png',
    // ]
    
    return(
    <div className={styles.section2}>
        <p className={styles.title2}>Популярные модели</p>
        <div className={styles.container5}>
            <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={imageUrlList[0]}/>
            <Card name = {kitchens[0][1]} newPrice = {kitchens[1][1]} oldPrice={kitchens[2][1]} url={imageUrlList[1]}/>
            <Card name = {kitchens[0][2]} newPrice = {kitchens[1][2]} oldPrice={kitchens[2][2]} url={imageUrlList[2]}/>
            <Card name = {kitchens[0][3]} newPrice = {kitchens[1][3]} oldPrice={kitchens[2][3]} url={imageUrlList[3]}/>
            <Card name = {kitchens[0][4]} newPrice = {kitchens[1][4]} oldPrice={kitchens[2][4]} url={imageUrlList[4]}/>
            <Card name = {kitchens[0][5]} newPrice = {kitchens[1][5]} oldPrice={kitchens[2][5]} url={imageUrlList[5]}/>
        </div>
        <div className={styles.container6}>
            {/* <Card/>
            <Card/>
            <Card/> */}
        </div>
            <div className={styles.wrapper2}>
            <ButtonViewAll/>
            </div>
        </div>
)}