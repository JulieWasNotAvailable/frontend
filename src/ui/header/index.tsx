import Image from 'next/image';
import Link from 'next/link';

import ButtonCall from '../button_call';
import NavBar from '../navbar'
import styles from './Header.module.scss';

export default function Header () {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                    <Image width={165} height={68} src="/logo.svg" alt="logo"/>
            </Link>
            <NavBar />
            <ButtonCall />            
        </header>
    )
}