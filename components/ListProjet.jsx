import styles from "./Projets.module.css";
import { FaEye } from "react-icons/fa";
import { FaLink, FaHtml5, FaCss3Alt, FaJs, FaPhp } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";



export default function ListProjet({ projets }) {

  return <>
     {
  projets.map((projet, index) => {
    return (
    <div key={index} className={styles.projetBloc}>
      <p >
        {projet.nom}
        <i>
          <span>
            <a  href={projet.lienGit} target="_blank">
              Lien Github
            </a>
            <FaLink />
          </span>
          
          <span>
            <a href={projet.lienDemo === false ? styles.demonFalse : projet.lienDemo} target="_blank">Demo</a>
            <FaEye />
          </span> - 
          {
                projet.language.map((lang, id) => {
                    return (
                    <span key={id}>
                        {
                            lang === "html" ?
                            ( <> {lang} <FaHtml5/> </>) : 
                            lang === "css" ?
                            (
                                <>{lang} <FaCss3Alt/> </>
                            ) :
                            lang === "PHP" ?
                            (
                                <>{lang} <FaPhp/> </>
                            ) :
                            lang === "javascript" ?
                            (
                                <>{lang} <FaJs/> </>
                            ) :
                            lang === "next.js(React)" ?
                            (
                                <>{lang} <RiNextjsFill/> </>
                            ) : ""
                        }
                    </span>
                    )
                })
            }
        </i>
      </p>
    </div>
  )})
}
  </>
}
