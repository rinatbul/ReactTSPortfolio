import {useState} from "react";



export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <button className="burger-button" onClick={toggleMenu}>
                &#9776; {/* Этот символ — символ бургер-меню */}
            </button>
            {isOpen && (
                <ul className="menu">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Services</li>
                    <li className="menu-item">Contact</li>
                </ul>
            )}
        </div>
    );
};
