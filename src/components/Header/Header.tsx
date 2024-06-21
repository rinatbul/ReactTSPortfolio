import s from './Header.module.css'
export const Header=()=>{
    return (
            <header className={s.header}>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
    )
}