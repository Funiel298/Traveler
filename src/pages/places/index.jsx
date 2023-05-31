import Nav from "@/components/Nav";
import CountryCard from "./Card";
import styles from './Card.module.css'
import Link from "next/link";
import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
export default function Countries(){
    
    const countrysideImages = [
        {
          name: "Switzerland",
          code: "CH",
          description: "The picturesque Swiss countryside with rolling hills and mountains.",
          imageUrl: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
          name: "Italy",
          code: "IT",
          description: "Beautiful Tuscany with its rolling hills, vineyards and cypress trees.",
          imageUrl: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "France",
          code: "FR",
          description: "Charming French countryside with fields of lavender and sunflowers.",
          imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Spain",
          code: "ES",
          description: "Beautiful Spanish countryside with olive groves and rolling hills.",
          imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "United Kingdom",
          code: "GB",
          description: "The stunning Scottish Highlands with its rugged landscapes and scenic lochs.",
          imageUrl: "https://images.unsplash.com/photo-1609673497536-6c723cfbc28f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Ireland",
          code: "IE",
          description: "Green rolling hills of the Irish countryside with traditional stone walls.",
          imageUrl: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXJlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
          name: "Greece",
          code: "GR",
          description: "Picturesque Greek countryside with white-washed houses and blue-domed churches.",
          imageUrl: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        },
        {
          name: "Portugal",
          code: "PT",
          description: "Stunning landscapes of the Douro Valley in Portugal, known for its wine production.",
          imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHVnYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Germany",
          code: "DE",
          description: "Picturesque Bavarian countryside with its traditional architecture and rolling hills.",
          imageUrl: "https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" 
        },
        {
          name: "Belarus",
          code: "BY",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1597986775867-1d871fad81fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Kazakhstan",
          code: "KZ",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1611474494831-363035161328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2F6YWtoc3RhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Kyrgyzstan",
          code: "KG",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1629340038197-191832a53546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a3lyZ3l6c3RhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Zimbabwe",
          code: "ZW",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1575285272212-d52e915d01c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emltYmFid2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Russia",
          code: "RU",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVzc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Ukraine",
          code: "UA",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1561629625-edea42c6da34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "United States of America",
          code: "US",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Turkey",
          code: "TR",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5JTVEfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Brazil",
          code: "BR",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1656288227038-28aaa4f6b8ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hJTIwYnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "Argentina",
          code: "AR",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJnZW50aW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
        },
        {
          name: "China",
          code: "CN",
          description: "The Austrian Alps with its snow-capped mountains and green valleys.",
          imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80" 
        }]
      
      
      const [text, setText] = useState('') 

      console.log(text)
      const icon = <BsSearch/>

      const [page,setPage] = useState(1)

     const checker = countrysideImages.filter((info)=>{
        return text.toLowerCase()===''? info: info.name.toLowerCase().includes(text)
      }).slice(page*9-9,page*9)

    return(
        <Nav>
          <div className={styles.main}>
            <input className={styles.search} onClick={()=>setPage(1)} type="text" placeholder={"Search"} onChange={(e) => setText(e.target.value)} value={text} />
              <div className={styles.grid}>
              
                  {checker.length==0
                  ? 
                  <h1 className={styles.ifRendering}>I DON'T KNOW THIS COUNTRY</h1> 
                  : 
                    checker.map((info)=>
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
              {checker.length==0? 
              null
              :
              countrysideImages.filter((item, index) => index < countrysideImages.length/9).map((button,index)=>
                <button key={index} onClick={()=>setPage(index+1)} className={styles.button}>
                  {index+1}
                </button>
              )}
            </div>
          </div>
              
            
        </Nav>
    )
}