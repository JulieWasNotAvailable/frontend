import { useEffect, useState } from "react";
import Image from 'next/image';
const url = 'http://127.0.0.1:7777/kitchens/db_images/1.jpg'

export default async function TestPage(){
  // const [img, setImg] = useState("");

  async function fetchCards (url: string){
    const res = await fetch(url);
    const json = await res.json();
    return (json[0].length)
    };

  const card = await fetchCards('http://127.0.0.1:7777/kitchens')
  console.log(card)

  return(
      <div>
          <button>do nothing</button>
          {/* <Image src = {img} alt='foo' height={100} width={100}/> */}
      </div>
  )
}