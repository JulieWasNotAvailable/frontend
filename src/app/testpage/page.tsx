'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';
const url = 'http://127.0.0.1:7777/kitchens/db_images/1.jpg'

export default function TestPage(){
  const [img, setImg] = useState("");

  async function fetchImage(url: string) {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    console.log(imageBlob)
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL)
  }

  useEffect(() => {
    fetchImage(url);
  }, []);
  
  console.log(img)

  return(
      <div>
          <button>do nothing</button>
          <Image src = {img} alt='foo' height={100} width={100}/>
      </div>
  )
}