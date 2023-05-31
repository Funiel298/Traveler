import { useState } from 'react'
import styles from './window.module.css'
import {MdOutlineClose} from 'react-icons/md'
export default function Window({status, setStatus, children}){


    return(
            <div className={status ? styles.background : styles.nonactive}  onClick={()=>setStatus(false)}>
                <div onClick={e => e.stopPropagation()} className={styles.window}>
                    {children}
                </div>
            </div>
    )
}