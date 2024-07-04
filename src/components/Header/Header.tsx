import s from './Header.module.css'
export const Header=()=>{
    return (
            <header className={s.header}>
                    <div className={s.image}>
                        Pic
                    </div>
                    <div className={s.container}>
                        <div className={s.mentorship}>
                            <p>Mentorship</p>
                        </div>
                        <button>
                            Say Hello
                        </button>
                    </div>

            </header>
    )
}