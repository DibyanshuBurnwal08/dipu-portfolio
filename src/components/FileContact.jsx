import styles from './FileContact.module.css';
import styles1 from './FileAbout.module.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";
const Contact = () => {
    return (
        <div className={styles.Main} id="contact"style={{ scrollMarginTop: '3rem' }} >
            <h1 className={styles1.Heading}>Let's Work Together</h1>
            <p style={{ fontSize: "larger", color:"rgb(75, 85, 99)", marginBottom:"3rem"}}>Have a project in mind? I'd love to hear about it. Send me a message!</p>
            <div className={styles.contentBox}>
                <form action="https://formspree.io/f/xeorvoqg" method="POST" className={styles.myform}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="user_name" name="message" placeholder='Your name' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="message" aria-describedby="emailHelp" placeholder='your.email@example.com' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="5" placeholder='Tell me about your project...'></textarea>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.myButton}`}><PiTelegramLogoLight className={styles.logo}/>Send Message</button>
                </form>
                <div className={styles.contentInfo}>
                    <h3>Contact Information</h3>
                    <div>
                        <div className={styles.infoBox}>
                            <div className={styles.iconBox}><MdOutlineMailOutline className={styles.reactIcons}/></div>
                            <div className={styles.infoText}>
                                <p>Email</p>
                                <a href="mailto:dibyanshuburnwal93393@gmail.com">dibyanshuburnwal93393@gmail.com</a>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.iconBox}><BsTelephone className={styles.reactIcons}/></div>
                            <div className={styles.infoText}>
                                <p>Phone</p>
                                <a href="tel:+919339320948">+91 9339320948</a>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.iconBox}><IoLocationOutline className={styles.reactIcons}/></div>
                            <div className={styles.infoText}>
                                <p>Location</p>
                                <span style={{fontWeight:"500"}}>N.S.B. ROAD, UKHRA, WEST BENGAL</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.freelanceBox}>
                        <h3>Available for Freelance</h3>
                        <p>I'm currently available for freelance work and interesting projects. Let's create something amazing together!</p>
                        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"1rem"}}>
                            <div className={styles.circle}></div>
                            <span>Available Now</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;