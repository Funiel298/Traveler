import Nav from "@/components/Nav";
import CountryCard from "./Card";
import styles from './Card.module.css'
import Link from "next/link";
import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import {countrysideImages} from './arr'
export default function Countries(){
    
    
      
      
      const [text, setText] = useState('') 

      console.log(text)
      const icon = <BsSearch/>

      const [page,setPage] = useState(1)

     const checker = countrysideImages?.filter((info)=>{
        return text.toLowerCase()===''? info: info.name.toLowerCase().includes(text)
      }).slice(page*9-9,page*9)

    return(
        <Nav>
          <div className={styles.main}>
            <input className={styles.search} onClick={()=>setPage(1)} type="text" placeholder={"Search"} onChange={(e) => setText(e.target.value)} value={text} />
              <div className={styles.grid}>
              
                  {checker?.length==0
                  ? 
                  <h1 className={styles.ifRendering}>I DON'T KNOW THIS COUNTRY</h1> 
                  : 
                    checker?.map((info)=>
                      <Link href={'places/'+ info.code} className={styles.link} key={info.code}>
                        <CountryCard 
                          key={info.code} 
                          image={info.imageUrl}
                          title={info.name} 
                          description={info.description} />
                      </Link>
                  )}
              </div>
            <div className="buttons">
              {checker?.length==0? 
              null
              :
              countrysideImages?.filter((item, index) => index < countrysideImages.length/9).map((button,index)=>
                <button key={index} onClick={()=>setPage(index+1)} className={styles.button}>
                  {index+1}
                </button>
              )}
            </div>
          </div>
              
            
        </Nav>
    )
}