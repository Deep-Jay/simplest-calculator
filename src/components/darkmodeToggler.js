import { useEffect, useState } from "react";
import light from './night-mode.png';
import dark from './dark-mode.png';

function DarkmodeToggler() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || "");

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleDark = (e) => {
        e.preventDefault();
        if (theme === 'dark') {
            setTheme(null);
        } else {
            setTheme('dark');
        }
    }

    return (
        <button className="dark-toggler" onClick={toggleDark}>
            <img className={theme === 'dark' ? '' : 'show' } src={light} alt="light mode" width='30' height='30' />
            <img className={theme === 'dark' ? 'show' : '' } src={dark} alt="dark mode" width='30' height='30' />
        </button>
    );
}

export default DarkmodeToggler;