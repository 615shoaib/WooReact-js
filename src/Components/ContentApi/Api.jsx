import { createContext,useState,useEffect} from "react";
import { apikey } from "../../Products/apikey";

export const AppPrvoider = createContext(null)


const Api =({children})=>{
    const [isOpen,setIsOpen]=useState(false)

    // products
    const [products, setProducts] = useState([])

    const getCard = async () => {
        try {
            const Card = await fetch(`https://localhost/wordpress/wp-json/wc/v3/products`, {
                method: "GET",
                headers: {

                    'Authorization': `Basic ${apikey()}`,
                    'Content-Type': 'application/json',
                },
            })

            if (Card.ok) {
                const updateJson = await Card.json()
                setProducts(updateJson)
            }
        } catch (error) {
            console.log(`card is no display`, error.message)
        }
    }
    useEffect(() => {
        getCard()
    }, [])
    return(
        <>
        <AppPrvoider.Provider value={{
            isOpen,
            setIsOpen,
            products,
            setProducts
        }}>
            {children}
        </AppPrvoider.Provider>
        </>
    )
}

export default Api;