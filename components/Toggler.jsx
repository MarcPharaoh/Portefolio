import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Toggler.module.css'
/**
 * une fonction qui retourne le toggler
 * @param {titre, visible, children} il liste les 2 projets 
 * @returns la liste du menu
 */
export default function Toggler({ titre, visible, children }) {
    const [contenuVisible, setContenuVisible] = useState(visible);
    const popupRef = useRef(null); useEffect(() => {
        function handleClickOutside(event) { if (popupRef.current && !popupRef.current.contains(event.target)) { setContenuVisible(false) } }
        document.addEventListener('mousedown', handleClickOutside); return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }, [popupRef]);
    const toggle = () => {
        setContenuVisible(!contenuVisible)
    }
    return <>
        <div className={styles.titre} onClick={toggle}>
            {titre}
        </div>
        {contenuVisible &&
            <div ref={popupRef} className={styles.contenu}>
                {children}
            </div>
        }
        {/* 
        Classe CSS conditionnelle

        <div className={styles.contenu + ' ' + (contenuVisible ? '' : styles.hidden)}>
            Contenu
        </div>*/}

    </>
}