import Image from 'next/image';
import Link from 'next/link';

import ButtonCall from '@/ui/button_call';
import NavBar from '@/ui/navbar'
import styles from './Header.module.scss';

export default function Header () {
    return (
        <div>
            <div className={styles.header}>
                    <Link href="/" className={styles.logo}>
                            <Image width={165} height={68} src="/logo.svg" alt="logo"/>
                    </Link>

                    <p className={styles.phone}>+7 (3466) 68-15-98</p>
                    
                    <div className={styles.navbar}><NavBar/></div>
                    
                    <div className={styles.button_call}><ButtonCall name='Заказать звонок'/></div>

            </div>
            <hr className={styles.line}/>
        </div>
    )
}