import { useEffect, useState } from "react";
import Image from 'next/image';
const testUrl = 'http://127.0.0.1:7777/kitchens/db_images/1.jpg'

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
  console.log(imageUrlList)
     
  return ([nameList, newPriceList, oldPriceList, imageUrlList])
}

async function CreateSortedParams() {
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
  console.log(imageUrlList)
  // nameList newPriceList oldPriceList imageUrlList
  return (<div>
    
  </div>)
}

export default async function TestPage(){

{/* <Card name = {kitchens[0][0]} newPrice = {kitchens[1][0]} oldPrice={kitchens[2][0]} url={kitchens[3][0]}/> */}

  return(
      <div>
          <button>do nothing</button>
          <CreateSortedParams/>
          {/* <Image src = {img} alt='foo' height={100} width={100}/> */}
      </div>
  )
}