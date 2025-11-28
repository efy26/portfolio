import Image from "next/image";
import Profile from "../public/developpeur.jpg";
import styles from "./Apropos.module.css";


export default function Apropos() {
    
  return (
    <section className={styles.apropos}>
      <h2>A propos</h2>
      <div className={styles.contentApropos}>
        <Image width={200} src={Profile} alt="Profile" className={  styles.profileImage} />
       <div>
         <p>
          Je suis Eliezer Efoya Likonga, un développeur web full-stack junior
          passionné par la création d’applications modernes et fonctionnelles. À
          l’aise avec HTML, CSS, JavaScript, Next.js (React), Node.js, Express,
          PHP, C# et Java, j’apprécie autant le front-end que le back-end.
        </p>
        <p>
          Formé au Collège la Cité et à LeteCode Academy, je n’ai pas
          encore d’expérience professionnelle, mais j’ai réalisé plusieurs
          projets universitaires ainsi que des projets personnels qui m’ont
          permis de renforcer mes compétences.
        </p>
        <p>
          je suis curieux, motivé et j’apprends rapidement. Je cherche à
          contribuer à des projets concrets tout en continuant à développer mes
          compétences.
        </p>
       </div>
      </div>
    </section>
  );
}
