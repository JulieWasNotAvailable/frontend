// 'use client'

import Card from '@/ui/catalogue_card'
import styles from './page1sesction2.module.scss'
import ButtonViewAll from '@/ui/button_view_all'
import { TextProps } from '@/ui/catalogue_card'

async function getData() {
    const res = await fetch('http://127.0.0.1:7777/kitchens')
    const json = await res.json()
    let nameList = []
    let newPriceList = []
    let oldPriceList = []
    let pictureList = []
    for (let i in json) {
        nameList.push(json[i].title)
        newPriceList.push(json[i].new_price)
        oldPriceList.push(json[i].old_price)
        pictureList.push(json[i].image)
    }
    console.log(nameList, newPriceList, oldPriceList)
    return ([nameList, newPriceList, oldPriceList])
}

export default async function Page1Section2(){

    const kitchens = await getData()

    return(
    <div className={styles.section2}>
        <p className={styles.title2}>Популярные модели</p>
        <div className={styles.container5}>
            <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]}/>
            <Card name = {kitchens[0][1]} newPrice = {kitchens[1][1]} oldPrice={kitchens[2][1]}/>
            <Card name = {kitchens[0][2]} newPrice = {kitchens[1][2]} oldPrice={kitchens[2][2]}/>
            <Card name = {kitchens[0][3]} newPrice = {kitchens[1][3]} oldPrice={kitchens[2][3]}/>
            <Card name = {kitchens[0][4]} newPrice = {kitchens[1][4]} oldPrice={kitchens[2][4]}/>
            <Card name = {kitchens[0][5]} newPrice = {kitchens[1][5]} oldPrice={kitchens[2][5]}/>
        </div>
        <div className={styles.container6}>
            <Card/>
            <Card/>
            <Card/>
        </div>
            <div className={styles.wrapper2}>
            <ButtonViewAll/>
            </div>
        </div>
)}