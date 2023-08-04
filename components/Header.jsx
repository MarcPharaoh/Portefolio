import Menu from "./Menu";
import Link from "next/link"
import styles from "../styles/Header.module.css"

/**
 * une fonction qui retourne le component header
 * @param {setPage} 
 * @returns le header
 */
export default function Header() {
    return <header className={styles.header}>
        <Link href="/" className={styles.titre}>Marc-Raphaël Chehab11</Link>
        <Menu/>
    </header>
}