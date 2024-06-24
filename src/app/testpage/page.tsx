'use client'

import { useState } from "react"

async function fetchBlob(url: string): Promise<Blob> {
    const res = await fetch(url)
    const blob = await res.blob()
    return(blob)
  }

async function downloadImageAndSetSource(imageUrl: string){
  const image = await fetchBlob(imageUrl);
  console.log(image)
  const url = URL.createObjectURL(image);
  console.log(url);

export default function TestPage(){

    downloadImageAndSetSource('http://127.0.0.1:7777/blewp.jpeg')

    return(
        <div>
            <button>do nothing</button>
            {/* <img/> */}
        </div>
    )
}