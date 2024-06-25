import Card from "@/ui/catalogue_card"
import styles from './Catalogues.module.scss'

export async function DefaultCatalogue({clicked}){

    async function createParams() {
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
           
        return ([nameList, newPriceList, oldPriceList, imageUrlList])
    }

    let kitchens = createParams();

    if (clicked == true){
        return(
            <div className={styles.container}>
                        <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={kitchens[3][0]}/>
                        <Card name = {kitchens[0][1]} newPrice = {kitchens[1][1]} oldPrice={kitchens[2][1]} url={kitchens[3][1]}/>
                        <Card name = {kitchens[0][2]} newPrice = {kitchens[1][2]} oldPrice={kitchens[2][2]} url={kitchens[3][2]}/>
                        <Card name = {kitchens[0][3]} newPrice = {kitchens[1][3]} oldPrice={kitchens[2][3]} url={kitchens[3][3]}/>
                        <Card name = {kitchens[0][4]} newPrice = {kitchens[1][4]} oldPrice={kitchens[2][4]} url={kitchens[3][4]}/>
                        <Card name = {kitchens[0][5]} newPrice = {kitchens[1][5]} oldPrice={kitchens[2][5]} url={kitchens[3][5]}/>
            </div>
        )}
}

export async function SortedCatalogue({clicked}){
    async function createSortedParams() {
        const res = await fetch('http://127.0.0.1:7777/kitchens')
        const json = await res.json()
        const sortedJson = await json.sort((a, b) => a.new_price - b.new_price);
        let nameList = []
        let newPriceList = []
        let oldPriceList = []
        let imageUrlList = []
        for (let i in sortedJson) {
            nameList.push(sortedJson[i].title)
            newPriceList.push(sortedJson[i].new_price)
            oldPriceList.push(sortedJson[i].old_price)
            imageUrlList.push(`http://127.0.0.1:7777/kitchens/db_images/${sortedJson[i].image}`)
        }
           
        return ([nameList, newPriceList, oldPriceList, imageUrlList])
    }

    let kitchens = await createSortedParams;

    if (clicked == false){
        return(
            <div className={styles.container}>
                        <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={kitchens[3][0]}/>
                        <Card name = {kitchens[0][1]} newPrice = {kitchens[1][1]} oldPrice={kitchens[2][1]} url={kitchens[3][1]}/>
                        <Card name = {kitchens[0][2]} newPrice = {kitchens[1][2]} oldPrice={kitchens[2][2]} url={kitchens[3][2]}/>
                        <Card name = {kitchens[0][3]} newPrice = {kitchens[1][3]} oldPrice={kitchens[2][3]} url={kitchens[3][3]}/>
                        <Card name = {kitchens[0][4]} newPrice = {kitchens[1][4]} oldPrice={kitchens[2][4]} url={kitchens[3][4]}/>
                        <Card name = {kitchens[0][5]} newPrice = {kitchens[1][5]} oldPrice={kitchens[2][5]} url={kitchens[3][5]}/>
            </div>
        )}
}