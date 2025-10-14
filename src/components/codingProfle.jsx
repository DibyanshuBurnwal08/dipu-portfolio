import styles from "./codingProfile.module.css";
import styles1 from './FileAbout.module.css';
import style2 from './FileSkills.module.css';
import { FaHackerrank } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const CodingProfile = () => {
    return (
        <div id="coding" className={styles.main} style={{ scrollMarginTop: '3rem' }}>
            <h1 className={styles1.Heading}>Coding Profile</h1>
            <div className={styles.boxContainer}>
                <div className={style2.box}>
                    <SiLeetcode className={styles.reactIcons} style={{color:"orange"}}/>
                    <h4>Leetcode</h4>
                    <div className={styles.myBox}>
                        <a href="https://leetcode.com/u/dibyanshuburnwal08/" className={styles.boxAnker}>View Profile</a>
                    </div>
                </div>
                <div className={style2.box}>
                    <SiGeeksforgeeks className={styles.reactIcons}/>
                    <h4>GeeksforGeeks</h4>
                    <div className={styles.myBox}>
                        <a href="https://www.geeksforgeeks.org/user/dibyanshubufhbn/?_gl=1*d3q5zh*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwt8zABhDKARIsAHXuD7aqIqYxiQAy4aJEzamcj69u9LWhaMpwsaZMvfObfkPLoBKlfBuAdZgaAlyfEALw_wcB&gbraid=0AAAAAC9yBkDSnCeNSxP4LKjjv2AViyaMy">
                            View Profile</a>
                    </div>
                </div>
                <div className={style2.box}>
                    <FaHackerrank className={styles.reactIcons}/>
                    <h4>HackerRank</h4>
                    <div className={styles.myBox}>
                        <a href="https://www.hackerrank.com/profile/dibyanshuburnwa1">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingProfile;