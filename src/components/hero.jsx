import styles from './hero.module.css';
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
const Hero = ({scrollToSection}) => {
        return (
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.circleBox}>FD</div>
                    <h1 className={styles.Heading}>Frontend Developer</h1>
                    <p style={{ fontSize: "1.5rem", lineHeight: "2rem", color:"rgb(75, 85, 99)", textAlign:"center" }}>Crafting beautiful, responsive, and user-friendly web experiences</p>
                    <div className={styles.buttonBox}>
                        <button className={styles.b1} onClick={() => scrollToSection('project')}>View my work</button>
                        <button className={styles.b2} onClick={() => scrollToSection('contact')}>Get in Touch</button>
                    </div>
                    <div className={styles.socialBox}>
                        <a href="https://github.com/DibyanshuBurnwal08"><FiGithub className={styles.reactTag}/></a>
                        <a href="https://www.linkedin.com/in/dibyanshu-burnwal-5b6132332/"><LuLinkedin className={styles.reactTag}/></a>
                        <a href=""><MdOutlineMailOutline className={styles.reactTag}/></a>
                    </div>
                    <IoChevronDownOutline className={styles.arrowDown}/>
                </div>
            </div>
        );
    }

    export default Hero;