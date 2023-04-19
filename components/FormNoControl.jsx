import { useState, useRef } from 'react'
import styles from '../styles/Forms.module.css'
/**
 * une fonction qui retourne le formulaire de la page contact
 * @returns formulaire
 */
export default function FormNoControl() {
    const inputNom = useRef(null);
    const inputCourriel = useRef(null);
    const inputMessage = useRef(null);
    const form = useRef(null);

    const onSubmit = async (data) => {
        let response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            // La réponse est positive
            alert("Votre message a été envoyé avec succès!");
        } else {
            // La réponse est négative
            alert("Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.");
        }

    }

    const [erreurNom, setErreurNom] = useState('')
    const valideNom = () => {
        if (inputNom.current.validity.valid) {
            setErreurNom('');
        }
        else {
            if (inputNom.current.validity.valueMissing) {
                setErreurNom('Le nom est requis');
            }
        }
    }

    const [erreurCourriel, setErreurCourriel] = useState('')
    const valideCourriel = () => {
        if (inputCourriel.current.validity.valid) {
            setErreurCourriel('');
        }
        else {
            if (inputCourriel.current.validity.valueMissing) {
                setErreurCourriel('Le courriel est requis');
            }
            else if (inputCourriel.current.validity.typeMismatch) {
                setErreurCourriel('Le courriel est invalide');
            }
        }
    }

    const [erreurMessage, setErreurMessage] = useState('')
    const valideMessage = () => {
        if (inputMessage.current.validity.valid) {
            setErreurMessage('');
        }
        else {
            if (inputMessage.current.validity.valueMissing) {
                setErreurMessage('Le message est requis');
            }
            else if (inputMessage.current.validity.tooShort) {
                setErreurMessage('Le message doit avoir au moins 8 caractères');
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        valideNom();
        valideCourriel();
        valideMessage();

        if (form.current.checkValidity()) {
            let data = {
                nom: inputNom.current.value,
                courriel: inputCourriel.current.value,
                message: inputMessage.current.value,
            }

            console.log(data)
            onSubmit(data)
            event.currentTarget.action = "https://formspree.io/f/mknaqzvb";

            event.currentTarget.method = "POST";

            event.currentTarget.submit();
        }
    }

    return <form
        className={styles.form}
        noValidate
        onSubmit={handleSubmit}
        ref={form}>
        <label>
            Nom:
            <input
                type="text"
                ref={inputNom}
                required
                onBlur={valideNom}
                name = "name" />
        </label>
        {erreurNom &&
            <div className={styles.erreur}>
                {erreurNom}
            </div>
        }

        <label>
            Courriel:
            <input
                type="email"
                ref={inputCourriel}
                required
                onBlur={valideCourriel}
                name = "email" />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Message:
            <textarea
                ref={inputMessage}
                required
                minLength="5"
                onBlur={valideMessage}
                name = "message" />
        </label>
        {erreurMessage &&
            <div className={styles.erreur}>
                {erreurMessage}
            </div>
        }
        <input type="submit" value="Envoyer" />
    </form>
}