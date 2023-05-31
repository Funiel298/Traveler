import Nav from '@/components/Nav';
import GetAllItems from '../country/data.js'
import Country from '../country/country';
export default function Info({card}){
    return(
        <Nav>
            {card.map(card => (
                <Country
                    key={card.name}
                    name = {card.name}
                    image={card.image} 
                    symbol={card.currency.symbol} 
                    code={card.code} 
                    moneyName={card.currency.name} 
                    moneyCode={card.currency.code}  
                    capital={card.capital} region={card.region} >
                        
                </Country>
            ))}
            {/* code, capital, region, moneyCode, moneyName, symbol */}
            
        </Nav>
    )
}

export async function getStaticProps({params}){
    const {id} = params;
    const card = GetAllItems(id)
    return{
        props: {card}
    }
}

export async function getStaticPaths(){
    const cards = GetAllItems()

    const  paths = cards.map(card=>({
        
        params: {id: card.code.toString()}
    }))

    return{
        paths,
        fallback: false
    }
}