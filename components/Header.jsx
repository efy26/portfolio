"use client";
import Menu from "./Menu";
import Image from "next/image";
import Profile from "../public/developpeur.jpg";
import styles from './Header.module.css'
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();


  return (
    <header className={styles.headers}>
      <div className={styles.container}>
        <div className={styles.idProfile}>
          <div>
            <h1 >
              Eliezer Efoya Likonga
            </h1>

            <p>Développeur Web full stack junior</p>
          </div>

          <Image
            src={Profile}
            alt="Photo de profile"
            width={200}
            className={
              pathname === "/apropos"
                ? styles.profileImageOff
                : styles.profileImage
            }
          />
        </div>

        <p className={styles.descripHeader}>
          Passioné par le développement web,
          je transforme des idées en applications fonctionnelles
          et toujours prêt à relever de nouveaux défis.
        </p>
      </div>

      <Menu />
    </header>
  );
}
