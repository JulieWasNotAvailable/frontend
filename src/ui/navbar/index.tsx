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

// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "About Us", href: "/about" },
//   { text: "Contact", href: "/contact" },
// ];
// const Navbar = () => {
//   const [navActive, setNavActive] = useState(0);
//   const [activeIdx, setActiveIdx] = useState(-1);

//   return (
//     <header>
//       <nav className={`nav`}>
//         <Link href={"/"}>
//           <a>
//             <h1 className="logo">CodeWithMarish</h1>
//           </a>
//         </Link>
//         <div
//           onClick={() => setNavActive(1)}
//           className={`nav__menu-bar`}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(0);
//               }}
//               key={menu.text}
//             >
//               <NavItem active={activeIdx === idx} {...menu} />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;