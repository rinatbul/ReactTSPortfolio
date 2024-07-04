import s from './Contact.module.css'
export const Contact=()=> {
    return (
        <section id="contact" className={s.contact}>
            <h2>Contact</h2>
            <p>You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </section>
    );
};
