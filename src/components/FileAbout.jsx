import styles from './FileAbout.module.css';
import { RiCodeSSlashLine } from "react-icons/ri";
import { PiPaintBrushLight } from "react-icons/pi";
import { FaSuperpowers } from "react-icons/fa6";
const FileAbout = () => {
    return (
        <div className={styles.Main} id="about" style={{ scrollMarginTop: '6rem' }}>
            <h1 className={styles.Heading}>About Me</h1>
            <p style={{ fontSize: "larger", color:"rgb(75, 85, 99)", textAlign:"center" }}>Passionate frontend developer with expertise in creating engaging web applications</p>
            <div className={styles.containImgContent}>
                <div className={styles.aboutImg}>
                    <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg" alt="Computer" />
                </div>
                <div className={styles.justAbout}>
                    <h3>Building Digital Experiences</h3>
                    <p>I'm a frontend developer who loves turning ideas into reality through code. With a keen eye for design and a passion for clean, efficient code, I create web applications that users love.</p>
                    <p>My focus is on building responsive, accessible, and performant websites that provide exceptional user experiences across all devices.</p>
                    <span>Remote Avaliable</span>
                </div>
            </div>
            <div className={styles.boxContainer}>
                <div className={styles.box}>
                    <div><RiCodeSSlashLine className={styles.reactIcons}/></div>
                    <h4>Clean Code</h4>
                    <p>Writing maintainable, scalable, and well-documented code</p>
                </div>
                <div className={styles.box}>
                    <div><PiPaintBrushLight className={styles.reactIcons}/></div>
                    <h4>Design First</h4>
                    <p>Creating pixel-perfect implementations from designs</p>
                </div>
                <div className={styles.box}>
                    <div><FaSuperpowers className={styles.reactIcons}/></div>
                    <h4>Performance</h4>
                    <p>Optimizing for speed and exceptional user experience</p>
                </div>
            </div>
        </div>

    );
}

export default FileAbout;