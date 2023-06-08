import styles from '../styles/Nav.module.css'
import Union from '/public/Union.png'
import Union1 from '/public/Union1.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


function List({title, link1, link2, link3}){
        return(
            <div className={styles.column}>
                    <h3 className={styles.footerheaders}>{title}</h3>
                    <ul className={styles.kek}>
                            <a href="" className={styles.a}><li className={styles.lo}>{link1}</li></a>
                            <a href="" className={styles.a}><li className={styles.lo}>{link2}</li></a>
                            <a href="" className={styles.a}><li className={styles.lo}>{link3}</li></a>
                                
                    </ul>     
            </div>
        )
    }
export default function Nav({children, head}){

    

    return(
        <>
            <Head>
                <title>Traveler</title>
            </Head>
            <header className={ head=='absolute' ? styles.headak : styles.header}>
                <nav className={styles.navigation}>
                     <Link href={'/'}><Image src={ head=='absolute' ? Union : Union1} priority alt="logo" width={40} /></Link>
                    <ul className={styles.ul}>
                        <li><Link href="about" className={styles.li} >About</Link></li>
                        <li><Link href="App" className={styles.li}>App</Link></li>
                        <li><Link href='places' className={styles.li}>Places</Link></li>
                            
                    </ul>
                    
                </nav>
            </header>
            <div style={{overflow: 'hidden'}}>
                {children}    
            </div> 

            <footer  className={styles.footer}>
                <Image src={Union1} alt="logo" width={40}/>
                

                <List title={'Menu'} link1={'About'} link2={'Explore'} link3={'Places'} />
                <List title={'Get in Touch'} link1={'traveler@gmail.com'} link2={'support.traveler@gmail.org'} link3={'app.traveler@bk.com'} />
                <List title={'Social Media'} link1={'Instagram'} link2={'Linkedin'} link3={'Facebook'} />
            </footer> 
        </>
    )
}