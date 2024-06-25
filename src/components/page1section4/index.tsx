'use client';

import styles from './page1section4.module.scss';

import ButtonStyles from "@/ui/button_styles";
import Form1, { Form1Mobile } from '@/ui/forms';

import Image from "next/image";
import { useState } from 'react';
  

function Menu({open}) {
    if (open === false) {
        return null;
    } else {
        return(
        <div className={styles.menuOptions}>
            <p className={styles.menuOption}>Маленькие</p>
            <p className={styles.menuOption}>Классика</p>
            <p className={styles.menuOption}>Скандинавский</p>
        </div>
        )
    }
}

function Burger() {
    const [open, setOpen] = useState(false);
  
    function handleClick() {
      if (open === false){
          setOpen(true)
      } else {
        setOpen(false)
      }
      }
      
    return (
    <div className={styles.menuWrappper}>
        <button className={styles.menuButton} onClick={handleClick}>
            Эконом
        </button>

        <Menu open={open}/>
    </div>
      )
  }

export default function Page1Section4 () {
    return(
        <div className={styles.section4}>
                <div className={styles.title}>
                    <p className={styles.titleBlack}>Выбор </p>
                    <p className={styles.titleYellow}>Кухни по стилям</p>
                </div>
                <p className={styles.text}>
                    Красивые, удобные и современные, кухни на заказ помогают создавать атмосферу уюта и комфорта в помещении.
                    Вы хотите воплотить в жизнь мечты об удобном гарнитуре? Мы готовы вам в этом помочь.
                </p>
                    <Burger/>
                <div className={styles.container}>
                    <p className={styles.smalltext}>
                        Выберите стиль:
                    </p>
                    <div className={styles.container2}>
                        <ButtonStyles name='Эконом'/>
                        <ButtonStyles name='Маленькие'/>
                        <ButtonStyles name='Классика'/>
                        <ButtonStyles name='Скандинавский'/>
                        <ButtonStyles name='Минимализм'/>
                        <ButtonStyles name='Хай-тек'/>
                        <ButtonStyles name='Лофт'/>
                        <ButtonStyles name='Прованс'/>
                    </div>
                </div>
                <div className={styles.pictures}>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.card}>
                        <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={360} height={260}/>
                        <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={50} height={50}/>
                    </div>
                    <div className={styles.cardMobile}>
                            <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={345} height={250}/>
                            <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={35} height={35}/>
                        </div>
                </div>
                    <div className={styles.picturesMobile}>
                        <div className={styles.cardMobile}>
                            <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={345} height={250}/>
                            <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={35} height={35}/>
                        </div>
                        <div className={styles.cardMobile}>
                            <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={345} height={250}/>
                            <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={35} height={35}/>
                        </div>
                        <div className={styles.cardMobile}>
                           <Image src='/choose_by_styles.svg' alt='choose kitchen by style' width={345} height={250}/>
                            <Image className={styles.icon} src='/magnifier-icon.svg' alt='magnifier-icon' width={35} height={35}/>
                        </div>
                    </div>
                    <button className={styles.buttonMobile}>Показать ещё</button>
                <Form1/>
                <Form1Mobile/>
        </div>
    )
}