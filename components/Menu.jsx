'use client';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <AiOutlineMenu
        size={30}
        className={styles.menuIcon}
        style={{ cursor: "pointer", color: "white" }}
        
        onClick={toggleMenu}
        
      />
      <div className={!isOpen ? `${styles.closeMenu} ${styles.nav}` : `${styles.openMenu} ${styles.nav}`}>
        <ul>
          <hr />
          <li >
            <Link href="/" onClick={closeMenu} className={pathname === "/" ? `${styles.active }`: ""}>Accueil</Link>
          </li>
          <hr />
          <li >
            <Link href="/apropos" onClick={closeMenu} className={pathname === "/apropos" ? styles.active : ""}>A propos</Link>
          </li>
          <hr />
          <li >
            <Link href="/projet" onClick={closeMenu} className={pathname === "/projet" ? styles.active : ""}>Projets</Link>
          </li>
          
        </ul>
        <div>
          
          <AiOutlineClose size={30} style={{ cursor: "pointer" }} className={styles.menuIconX} onClick={toggleMenu}/>
        </div>
      </div>
    </nav>
  );
}
