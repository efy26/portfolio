"use client";
import styles from "./Formulaire.module.css";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

export default function Formulaire() {
  const refNom = useRef("null");
  const refCourriel = useRef(null);
  const refMessage = useRef(null);
  const refSubject = useRef(null);
  const [nomErreur, setNomErreur] = useState("");
  const [courrielErreur, setCourrielErreur] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const [envoieReussi, setEnvoieReussi] = useState(false);
  const courrielRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let erreur = false;

  const submitForm = (event) => {
    event.preventDefault();

    const nom = refNom.current.value;
    const courriel = refCourriel.current.value;
    const subject = refSubject.current.value;
    const message = refMessage.current.value;

    // verification champ nom
    if (!nom) {
      setNomErreur("Ce champ doit être rempli");
      // eslint-disable-next-line react-hooks/immutability
      erreur = true;
    } else {
      setNomErreur("");
    }

    // Verification champ courriel
    if (!courriel || !courrielRegex.test(courriel)) {
      setCourrielErreur("Ce courriel est invalide");
      erreur = true;
    } else {
      setCourrielErreur("");
    }

    // Verification champ message
    if (!message) {
      setMessageErreur("Ce champ doit être rempli");
      erreur = true;
    } else {
      setMessageErreur("");
    }

    // Verification de l'erreur
    if (erreur) {
      setEnvoieReussi(false);
      return;
    }

    const templateParams = {
      name: nom,
      email: courriel,
      subject: subject,
      message: message,
    };
    emailJs
      .send(
        "service_76qpqkp", //Service ID
        "template_o4t44cc", //Template ID
        templateParams,
        "rZ5RQEhhiZypIct5F" // user public Key
      )
      .then((response) => {
        setEnvoieReussi(true);
        refNom.current.value = "";
        refCourriel.current.value = "";
        refSubject.current.value = "";
        refMessage.current.value = "";

        setTimeout(() => setEnvoieReussi(false), 3000);

      })
      .catch((error) => {
        setEnvoieReussi(false);
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={submitForm} className={styles.formulaire}>
        <input type="text" ref={refNom} placeholder="Votre nom" />
        {nomErreur && <div className={styles.messageErreur}>{nomErreur}</div>}
        <input type="email" ref={refCourriel} placeholder="Votre email" />
        {courrielErreur && (
          <div className={styles.messageErreur}>{courrielErreur}</div>
        )}
        <input type="text" ref={refSubject} placeholder="Subject" required />

        <textarea ref={refMessage} placeholder="Message"></textarea>
        {messageErreur && (
          <div className={styles.messageErreur}>{messageErreur}</div>
        )}
        <button type="submit">Envoyer</button>
        {envoieReussi && (
          <div>
            <div
              className={styles.envoieReussi}
              role="status"
              aria-live="polite"
            >
              Le message a été envoyé avec succès.
            </div>
          </div>
        )}
      </form>
    </>
  );
}
