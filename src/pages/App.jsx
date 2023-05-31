import Nav from '../components/Nav'
import styles from '../styles/Explore.module.css'
import Image from "next/image";
import Union from '/public/Union1.png'

export default function App(){
    
    return(
        <Nav head={'non'}>
            <div className={styles.main}>
                <div className={styles.head}>
                    <div className={styles.text}>
                        <h1 className={styles.h1}>Explore our new app for phones!</h1>
                        <p className={styles.p}>
                            It's really easy in using and we will be happy if you would use him.
                            Tutorial in using him in Youtube
                        </p>
                        <a href="#downloading"><button className={styles.explore_button}>Download</button></a>
                        
                    </div>
                    <div className={styles.images}>
                        <Image style={{objectFit:'cover'}} alt="puzzle" rel="preload" priority src={'https://preview.redd.it/sxt27x6y0t671.png?auto=webp&s=a90c819515983232e33015e90dfed6d252bed52a'} fill />
                    </div>
                    
                </div>

                <div id='downloading' className={styles.download_section}>
                    <Image src={Union} alt='logo' width={60}></Image>
                    <h1 className={styles.h1}>Download Traveler from our team</h1>
                    <div className={styles.part}>
                        <div className={styles.downloading_section}>
                            <h2>Traveler for PC and pads</h2>
                            <button className={styles.download_button}>Download</button>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.downloading_section}>
                            <h2>Traveler for PC and pads</h2>
                            <button className={styles.download_button}>Download</button>
                        </div>
                    </div>
                </div>

            </div>

        </Nav>
    )
}