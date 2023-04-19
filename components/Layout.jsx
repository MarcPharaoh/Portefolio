import Header from "./Header";
import Footer from "./Footer";

/**
 * Une fonction qui retourne le layout
 * @param {children, setPage} param0 
 * @returns le layout
 */
export default function Layout({ children }) {
    return <>
        <Header/>

        {children}

        {/* Footer ici */}
        <Footer />
    </>
}