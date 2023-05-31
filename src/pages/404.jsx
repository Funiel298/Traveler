import Nav from "@/components/Nav"
import Link from "next/link"
import styles from '../styles/Error.module.css'

export default function Error(){
    return(
        <Nav head={'non'}>
            <div className={styles.errortext}>
                <h1 className={styles.headtext}>Sorry, I didn't know this site!</h1>
                <Link href={'/'} className={styles.link}>Return</Link>
            </div>
        </Nav>
    )
}