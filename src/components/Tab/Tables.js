import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import {MdClose} from 'react-icons/md' 
import {GoCheck} from 'react-icons/go'
import {motion, useScroll, useTransform} from 'framer-motion'
import { Link } from 'react-scroll';

export default function Tables(){
    



    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#3b673b',
        300: '#66B2FF',
        400: '#3b673b',
        500: '#203920',
        600: '#3b673b',
        700: '#0059B2',
        800: '#004C99',
        900: '#003A75',
      };
      
      const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#648c0d',
        700: '#424a53',
        800: '#32383f',
        900: '#20343b',
      };

    const Tab = styled(TabUnstyled)`
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 80vw;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: ${blue[400]};
    }

    &:focus {
        color: #fff;
        outline: 3px solid ${blue[200]};
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #fff;
        color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
    `;

    const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    opacity: 0.6;
    vertical-align: middle;
    `,
    );

    const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    width: '80vw';
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
    );
        


    const lists = [
        {
            index: 1,
            status: [true, true,true],
            info: 'Access to free profiles'
        },
        {
            index: 2,
            status: [true, true,true],
            info: 'Access to chat'
        },
        {
            index: 3,
            status: [false, true,true],
            info: 'Subscriptions to blogs'
        },
        {
            index: 4,
            status: [false, true,true],
            info: 'Photo editing'
        },
        {
            index: 5,
            status: [false, true,true],
            info: 'Access to voice chat'
        },
        {
            index: 6,
            status: [false, false,true],
            info: 'Using photos in profiles'
        },
        {
            index: 7, 
            status: [false, false,true],
            info: 'Access to royal profiles'
        },
    ]





     function List(value){
        
        const list = lists.map(list =>(
            <li key={list.index} style={{marginBottom: '10px'}}>
                {(list.status[value] ? 
                    <GoCheck style={{color : 'green', verticalAlign: 'middle'}}/> : 
                    <MdClose style={{color: 'red', verticalAlign: 'middle'}}/> )} {list.info}
            </li>)
        )
        
        return(
            <div className="returnedList">    
                <ul style={{display: "flex", flexDirection: 'column', fontWeight: '700', listStyle: 'none'}}>{list}</ul>
                <Link to="login" smooth={true}><button style={{marginLeft: '50%', padding: '10px',borderRadius: '10px', fontWeight: '600', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer'}}>Buy</button></Link>
            </div>
        )
        
     }

     let {scrollYProgress} = useScroll()
    let y = useTransform(scrollYProgress, [1,0],['0%','100%'])
    
    return(
        <motion.div  style={{y, width: '80%', marginLeft: '10%', marginBottom: '10%'}}>
            <TabsUnstyled defaultValue={1}>
            <TabsList>
                <Tab>Free</Tab>
                <Tab>Premium</Tab>
                <Tab>Royal</Tab>
            </TabsList>
            <TabPanel value={0} style={{alignContent: 'center'}}>
                {List(0)}
            </TabPanel>
            <TabPanel value={1}>
                {List(1)}
            </TabPanel>
            <TabPanel value={2}>
                {List(2)}
            </TabPanel>
            </TabsUnstyled>     
                  
        </motion.div>
    )


    
}


