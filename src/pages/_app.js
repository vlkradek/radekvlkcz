import Layout from "@/comps/Layout";
import "../styles/style.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />;
            <Footer />
        </>
    );
}
