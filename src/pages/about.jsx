import Nav from '@/components/Nav'
import puzzlepeople from '/public/puzzlepeople.jpg'
import styles from '.././styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Info from './places/[id]'
import Section from '@/components/SectionInfo/Section'
export default function About(){

    let cards = [
        {
            image: 'https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            title: 'Innovation',
            desc: 'We believe technology can and should be a force for good and that meaningful innovation can and will contribute to a brighter world in big and small ways.'
        },
        {
            image: 'https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            title: 'Diversity and inclusion',
            desc: 'We thrive on diverse voices. We engage our employees’ and customers’ experiences, strengths, and different points of view to inform, challenge, and stretch our thinking. This is how we innovate.'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1661549596961-0534f6b8b3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMHNvY2lhbCUyMHJlc3BvbnNpYmlsaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            title: 'Corporate Social Responsibility',
            desc: 'We believe technology is a powerful force for good and are working to foster a sustainable future where everyone has access to the benefits and opportunities created by technology.'
        },
    ]

    let sections =[
        {
            clas: '',
            title: 'Spread the love of travel',
            desc: 'Our app needed to spread experience from travelling. We hope that people will like other countries and nations and it will motivate to learn other cultures and histories',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
        },
        {
            clas: 'right',
            title: 'Earn trust',
            desc: 'At Traveler, we’re optimistic about the benefits of technology, yet clear about the challenges. To drive positive impact with technology, people need to be able to trust the technologies they use and the companies behind them.',
            image: 'https://images.unsplash.com/photo-1575561723050-3a69691d9700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
        },
        {
            clas: '',
            title: 'Create a sustainable future',
            desc: 'Climate change is the defining issue of our generation, and addressing it requires swift, collective action and technical innovation. We’ve outlined ambitious commitments and detailed plans to achieve them, and we’re helping others set and achieve their own climate goals.',
            image: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
    ]




    return(
        <Nav head={'non'}>
            <div className={styles.head}>
                <div className={styles.div_class}>
                    <Image alt="puzzle" rel="preload" fill style={{objectFit:'cover'}} priority src={puzzlepeople} />
                </div>
                
                <div className={styles.text}>
                    <h1 className={styles.h1}>About us! Who are we?</h1>
                    <p className={styles.p}>
                        We are active people who want to
                        spread travels and adventures around the world!
                        We sure that it is really useful and funny hobby where you 
                        can find a lot of friends with the same vision as you!
                    
                    </p>
                </div>

                

            </div>


            <div className={styles.missions}>

                <h1 className={styles.title}>Our commitments</h1>
                <p>We believe that companies that can do more, should. That’s why we remain focused on four key areas in which technology can and must benefit the future of humanity and our planet.</p>
                

                {sections.map((post)=>(
                    <Section 
                    key={post.title}
                    clas={post.clas}
                    title={post.title}
                    desc={post.desc}
                    image={post.image}
                   
                    />
                ))}

                <h1 className={styles.title}>Our missions</h1>
                <div className={styles.cards}>
                    {cards.map((item)=>
                        <div key={item.title} className={styles.card}>
                            <img src={item.image} alt="@" className={styles.image} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div> 
                    )}
                </div>

                

                <h1  className={styles.title}>Our approach to building a better future</h1>
                <p>Learn more about our approach to building a more inclusive, equitable, sustainable, and trusted future for everyone.</p>
                <div className={styles.card}>
                            <img height={200} style={{objectFit: 'cover'}} src={'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'} alt="@" className={styles.image} />
                            <h3>Creating new useful soft</h3>
                            <p>We made a great display for people who really sucks at technologies and we hope that people will be happy with new functions.Check our new app cause we have new update! </p>
                            <Link href={'App'}> <button className={styles.explore_button}>Check</button> </Link>
                        </div> 
            
            </div>
            
            
        </Nav>
    )
}