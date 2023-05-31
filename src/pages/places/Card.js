import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function CountryCard({image,title, description}){
    return(
            <div className={styles.head}>
                <div className={styles.image_class}>
                    <Image className={styles.image} src={image} alt='beautiful place' fill/>
                </div>
                
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <h4 className={styles.info}>
                        {description}
                    </h4>
                </div> 
            </div>
    )
}