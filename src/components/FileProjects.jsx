import styles from './FileProjects.module.css';

const Projects = () => {
    return (
    <div className={styles.Main} id="project" style={{ scrollMarginTop: '2rem' }}>
        <h1 className={styles.Heading}>Featured Projects</h1>
        <p style={{ fontSize: "larger", color:"rgb(75, 85, 99)" }}>A selection of my recent work and side projects</p>
        <div className={styles.boxContainer}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
    </div>
);
}

export default Projects;