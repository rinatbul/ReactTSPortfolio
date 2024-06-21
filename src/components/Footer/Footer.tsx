import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};