'use client';
import styles from "./Accueil.module.css";
import Link from "next/link";
import ListProjet from "./ListProjet";
import projetsData from "@/public/projets.json";
import Formulaire from "./Formulaire";
import {  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNodeJs, FaJava, FaGithub } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiLunacy } from "react-icons/si";



export default function Accueil() {

  return (
    <main className={ styles.mains}>
      <section>
        <div className={styles.apropos}>
          <h2>À PROPOS</h2>
          <p>
            Je suis un développeur web full-stack junior passionné par la
            création d’applications modernes et fonctionnelles. À l’aise avec
            HTML, CSS, JavaScript, Next(React).js, Node.js et Express, C#, Java,
            j’aime autant le front-end que le back-end.
          </p>

          <p>
            Curieux et motivé, j’apprends rapidement et je cherche à contribuer
            à des projets concrets tout en continuant à développer mes
            compétences.
          </p>
          <a href="/path/to/cv.pdf" download>
            Télécharger mon CV
          </a>
        </div>
        <div className={styles.projet}>
          <h2>PROJETS</h2>
          <div className={styles.projetBloc}>
            <p>
              Portfolio personnel
              <i>
                <span>Next.js(React) <RiNextjsFill/></span>
                <span>CSS <FaCss3Alt/></span>
                <span>html <FaHtml5/></span>
              </i>
            </p>
          </div>
          <ListProjet projets={projetsData.slice(0, 2)} />
          <Link href="/projet" className={styles.voirPlus}>
            Voir plus
          </Link>
        </div>
      </section>

      <section className={styles.competenceContact}>
        <div>
          <div>
            <h2>COMPÉTENCES</h2>
            <div className={styles.competences}>
              <span>HTML <FaHtml5/></span>
              <span>CSS <FaCss3Alt/></span>
              <span>JavaScript <FaJs/></span>
              <span>PHP <FaPhp/></span>
              <span>Next(React).js <RiNextjsFill/></span>
              <span>Node.js et Express <FaNodeJs/></span>
              <span>C# <TbBrandCSharp/></span>
              <span>Java <FaJava/></span>
            </div>
          </div>
          <div className={styles.outils}>
            <h2>Outils</h2>
            <div className={styles.competences}>
              <span>Git <FaGithub/></span>
              <span>VS Code <VscVscode/></span>
              <span>Lunacy <SiLunacy/></span>
            </div>
          </div>
        </div>
        <div >
          <h2>CONTACT</h2>
          <Formulaire/>
        </div>
      </section>
    </main>
  );
}
