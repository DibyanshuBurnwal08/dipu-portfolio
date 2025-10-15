import styles from './FileSkills.module.css';
import styles1 from './FileAbout.module.css';

const FileSkills = () => {
    return (
        <div className={styles.main} id="skill" style={{ scrollMarginTop: '2rem' }}>
            <div>
            <h1 className={styles.Heading}>Skills & Technologies</h1>
            <p style={{ marginBottom: "4rem",fontSize:"large",color:"gray" }}>Tools and technologies I use to bring ideas to life</p>
            </div>
            <div className={styles1.boxContainer}>
                <div className={styles.box}>
                    <h3>Languages</h3>
                    <div className={styles.myBox}>
                        <p className={styles.likeButton}>Html</p> <p className={styles.likeButton}>Css</p> <p className={styles.likeButton}>Javascript</p> <p className={styles.likeButton}>Java</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h3>FrameWorks & Styling</h3>
                    <div className={styles.myBox}>
                        <p className={styles.likeButton}>React.js</p> <p className={styles.likeButton}>Bootstrap</p> 
                    </div>
                </div>
                <div className={styles.box}>
                    <h3>Tools & others</h3>
                    <div className={styles.myBox}>
                        <p className={styles.likeButton}>Git</p> <p className={styles.likeButton}>npm</p> <p className={styles.likeButton}>VS Code</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileSkills;