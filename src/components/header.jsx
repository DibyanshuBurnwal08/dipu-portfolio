import styles from './header.module.css';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Header = () => {

    const [showIcon, setShowIcon] = useState(true);

    return (
            <div className={styles.header}>
                <div><button className={styles.portfolio}>Portfolio</button></div>
                <div>
                    {showIcon === true && 
                    <MdOutlineMenu className={styles.menuIcon}
                    onClick={() => setShowIcon(false)}/>}
                    
                    {showIcon === false && 
                    <RxCross2 className={styles.menuIcon}
                    onClick={() => setShowIcon(true)}/>}

                    <ul className={styles.nav}>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.aContent}`} href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.aContent}`} href="#skill">Skill</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.aContent}`} href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.aContent}`} href="#coding">Coding Profile</a>
                        </li>
                        <li className="nav-item">
                       <a className={`nav-link ${styles.likeButton}`} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {showIcon === false &&
                
                (
                    <div className={styles.menu}>
                        <a href="#about" onClick={() => setShowIcon(true)}>About</a>
                        <a href="#skill" onClick={() => setShowIcon(true)}>Skill</a>
                        <a href="#project" onClick={() => setShowIcon(true)}>Projects</a>
                        <a href="#coding" onClick={() => setShowIcon(true)}>Coding Profile</a>
                        <a href="#contact" onClick={() => setShowIcon(true)}>Contact</a>
                    </div>
                )

                }

            </div>

    );
}

export default Header;