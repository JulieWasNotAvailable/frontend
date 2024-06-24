'use client'

import { useEffect, useState } from 'react';
import styles from './Card.module.scss'
import Image from 'next/image'

export class CardProps {
    name?: string;
    newPrice?: number;
    oldPrice?: number;
    url?: string;
}

export default function Card({name = 'Default', newPrice = 12000, oldPrice = 13000, url = 'http://127.0.0.1:7777/kitchens/db_images/brown.png'}: CardProps) {
    const [img, setImg] = useState('');

    async function fetchImage(url: string) {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL)
    }
  
    useEffect(() => {
      fetchImage(url);
    }, []);
    
    return (
        <div className={styles.card}>
            <Image className={styles.img} src={img} alt='something for card' width = {360} height={260}/>
            <div className={styles.description}>
                <p className={styles.name}>{name}</p>
                    <div className={styles.container}>
                        <div className={styles.price}>
                            <span className={styles.oldprice}>{oldPrice}</span>
                            <span className={styles.newprice}>{newPrice}</span>
                        </div>
                        <button className={styles.buttonAdd}>
                        </button>
                    </div>   
            </div>
        </div>
    )
}