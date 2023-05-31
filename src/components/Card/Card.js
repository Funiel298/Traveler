import styles from './Card.module.css'
import Image from 'next/image'
import { forwardRef } from 'react'
import {motion} from 'framer-motion'
const Card = forwardRef(({icon, name, info, id}, ref) => (
        <div className={styles.card} key={id} ref={ref}>  
            <div className={styles.icon_image}>
                <Image
                    src={icon}
                    alt="icon"
                    fill
                />
            </div>
            <h2>
                {name} <br/>
                <span className={styles.span}>{info}</span>
            </h2>
        </div>
))

const motionCard = motion(Card)
export default motionCard