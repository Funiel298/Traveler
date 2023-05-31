import styles from './Section.module.css'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function Section({title, desc, clas, image, button_name}){


    let {scrollYProgress} = useScroll()
    let y = useTransform(scrollYProgress, [1,0],['0%','20%'])
    
    
    return(
        <motion.div style={{y}} className={clas=='right' ? styles.right: styles.left}>
            <div className={styles.textik}>
                <h1 className={styles.d}>{title}</h1>
                <h4 className={styles.description}>{desc}</h4>
                {button_name==null? null : <button className={styles.explore_button}>{button_name}</button>}
            </div>
            <div className={styles.div_class}>
                <Image src={image} alt='image' fill style={{objectFit:'cover'}} />
            </div>
        </motion.div>
    )
}


