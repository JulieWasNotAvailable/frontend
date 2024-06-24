'use client';

import Link from 'next/link';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.navListItem}>
                    <Link href="/catalogue">каталог товаров</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">кухонные модули</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Декоры</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Фотопечать</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Готовые решения</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Контакты</Link>
                </div>
            </div>
        </nav>
    );
}
