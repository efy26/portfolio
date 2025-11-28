import styles from "./Projets.module.css";
import ListProjet from "./ListProjet";
import projetsData from "@/public/projets.json";
import {  FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";


export default function Projets() {
  return (
     <section>
        
        <div className={styles.projet}>
          <h2>PROJETS</h2>
          <div className={styles.projetBloc}>
            <p>
              Portfolio personnel
              <i >
                <span>Next.js(React) <RiNextjsFill/></span>
                <span>CSS <FaCss3Alt/></span>
                <span>html <FaHtml5/></span>
              </i>
            </p>
          </div>
          <ListProjet projets={projetsData} />
          
        </div>
      </section>
  );
}
