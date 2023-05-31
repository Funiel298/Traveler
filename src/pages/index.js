import Card from "../components/Card/Card.js"
import Nav from "@/components/Nav.jsx"
import styles from '@/styles/Home.module.css'
import Section from "../components/SectionInfo/Section.js"
import image1 from '/public/connect.png'
import image2 from '/public/scm.png'
import chat from '/public/chat.png'
import usability from '/public/usability.png'
import shield from '/public/shield.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import Modal from "@/components/window/Window.jsx"
import Image from "next/image.js"
import { useState } from "react"
import RegisterWindow from "@/components/window/Window.jsx"
import Tables from "@/components/Tab/Tables.js"


export default function Home(){

    const data = [
        {
            id: 1,
            name: "Safety",
            info: `With us your information will be with secure 
            and all your photos will have literary property!`,
            icon: shield,
            percent: 30
        },
        {
            id: 2,
            name: 'Usability',
            info: `You can see every place in the world in 
            your phone and see vlogs from there!`,
            icon: usability,
            percent: 30
        },{
            id: 3,
            name: 'Chatting',
            info: `Subscribe to chats where people can read or 
            write information about place or city!`,
            icon: chat,
            percent: 30
        }
    ]

    
    const [logStatus, setLogStatus] = useState(false)
    const [regStatus, setRegStatus] = useState(false)

    let {scrollYProgress} = useScroll()
    let y = useTransform(scrollYProgress, [0,1],['0%','10%'])
    let y1 = useTransform(scrollYProgress, [0,1],['0%','60%'])




    const featureAnimations ={
        hidden: {
            y: 100,
            opacity : 0
        },
        visible: custom =>({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }),
    }
    function Transfer(){
        setRegStatus(!regStatus)
        setLogStatus(!logStatus)
    }

    function Registered(e){
        e.stopPropagation()
        setRegStatus(false)
        setLogStatus(false)
        alert('Thank you for being with us!')
    }

   
    return(
        <Nav head={'absolute'}>
            
            <Modal status={logStatus} setStatus={setLogStatus}>
                <h1>Login</h1>
                <input required pattern="/^\S+@\S+$/i" minLength={2} className={styles.inputer} type="email" placeholder="Email"/>
                <input type="password" required minLength={8} className={styles.inputer} placeholder="Password"/>
                <p><span className={styles.span} onClick={Transfer}>Link</span> if you forgot your password</p>
                <button className={styles.actionButton} onClick={Registered}>Login</button>
            </Modal>



            <RegisterWindow status={regStatus} setStatus={setRegStatus}>
                <h1>Register</h1>
                <input  type="text" required minLength={2} className={styles.inputer} placeholder="Name and Surname"/>
                <input type="email" required pattern="/^\S+@\S+$/i" minLength={2}  placeholder="Email" className={styles.inputer}/>
                <input type="password" required minLength={8} placeholder="Password" className={styles.inputer}/>
                <input type="password" required minLength={8} placeholder="Password" className={styles.inputer}/>
                <p><span className={styles.span} onClick={Transfer}>Link</span> if you have account</p>
                <button className={styles.actionButton} onClick={Registered}>Register</button>
            </RegisterWindow>

            

            <div className={styles.main}>
                
                <div id="login" className={styles.head}  >
                    <Image alt="kek" src={'/background.jpg'} style={{objectFit: 'cover'}} priority fill  className={styles.image} />
                    <div
                        className={styles.text}>

                        <h1 className={styles.title}>EXPLORE THIS WORLD!</h1>
                        <p className={styles.information}>
                            WATCH TRAVELERS LIKE YOU!
                        </p>
                        <div className={styles.buttons}>
                            <button onClick={()=> setLogStatus(true)} className={styles.login_button}>Login</button> 
                            <button onClick={()=> setRegStatus(true)} className={styles.reg_button}>Register</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* Section */}

            


            
            <Section 
                title={'Connect Us!'} 
                desc={`This app was made as a social media for travelers and alternative of Instagram.
                    We hope that yuo like our app cause it was made for all people in the world!
                    This app almost free, but if you want to get bonuses you need to get at least premium subscription.
                `}
                clas={'left'}
                image={'https://img.freepik.com/free-vector/flat-tourists-ready-holiday_23-2149059981.jpg'}
                button_name={"Explore"} />

            
            {/* Cards */}

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                className={styles.cards}  >
                {
                    data.map((card) => 
                        <Card
                        custom={card.id}
                        style={useTransform(scrollYProgress, [0,1],['0%',card.id*10])}
                        variants={featureAnimations}
                         name={card.name}
                          info={card.info}
                           icon={card.icon}
                            key={card.id}/>)
                }
            </motion.div>



            {/* Section */}
            <Section
                title={'Traveler with other social medias!'} 
                desc={`You can also connect Traveler with other social medias and you can get recommendations
                about new trips in other apps. You can edit this in settings and it's really easy to turn on or vice versa!
                `}
                clas={'right'}
                image={image2}
                button_name={"Connect"} />

            <Tables/>

            
        </Nav>
    )
}