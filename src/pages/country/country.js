import Image from 'next/image';
import styles from './Country.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../../components/Card/Card.js';
export default function Country({image, name, code, capital, region, moneyCode, moneyName, symbol}){

    const settings = {
        dots: false,
        infinite: false ,
        autoplaySpeed: 100,
        lazyLoad: 'progressive',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };

    return(
        <>
            <div className={styles.fisrtsection}>
                <div className={styles.download_section}>
                    <Image src={image} alt='image' fill/>
                </div>
                <div className={styles.text} >
                    <h1>Name: {name}</h1>
                    <h3>Code: {code} <br/>
                         Capital :  {capital}<br/>
                         Region :  {region}<br/>
                         Code :  {moneyCode}<br/>
                         Name :  {moneyName}<br/>
                         Symbol :  {symbol}<br/>
                        </h3>
                        <Image className={styles.image} src={`https://flagsapi.com/${code}/flat/64.png`} alt='flag'  width={100} height={100}/>
                    
                </div>
            </div>

            <div className={styles.secondsection}>
                <h1>Info</h1>
                <div className={styles.beauty}>
                    <h3 className={styles.textik}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                    </h3>
                    <div className={styles.download_section}>
                        <Image src={'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag-map_of_the_world_%282017%29.png'} alt='image' fill/>
                    </div>
                </div>
            </div>
            
            <div className={styles.secondsection}>
                <h1>Geography</h1>
                <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at velit. Voluptates neque in suscipit dolore, harum, inventore accusantium, qui nobis dolor dolorem voluptatibus expedita animi ut similique omnis odit.
                </h3>
            </div>
            <div>
            
        <div className={styles.slider}>
            
            <Slider {...settings}>
                <div className={styles.card}>
                    <Card name={'Alps'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
                <div className={styles.card}>
                    <Card name={'Second Alps'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
                <div className={styles.card}>
                    <Card name={'Wow! Third Alps!'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
                <div className={styles.card}>
                    <Card name={'You really slide here?'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
                <div className={styles.card}>
                    <Card name={'I don`t recommend to continue'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
                <div className={styles.card}>
                    <Card name={'This is the end and there is nothing here, I told you'} icon={'https://media.cntraveler.com/photos/5aaac20c60ef3f51835c5be5/16:9/w_2580,c_limit/Rock-Of-Cashel-GettyImages-165559826.jpg'} info={'I was too lazy to do or search a really great text, so you see that lazy message from me with this cute cat ˶^•ﻌ•^˵'}   />
                </div>
            </Slider>
        </div>
            </div>
        </>
    )
}