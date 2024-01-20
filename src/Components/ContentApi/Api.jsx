import { createContext,useState} from "react";

export const AppPrvoider = createContext(null)


const Api =({children})=>{
    const [isOpen,setIsOpen]=useState(false)
    return(
        <>
        <AppPrvoider.Provider value={{
            isOpen,
            setIsOpen
        }}>
            {children}
        </AppPrvoider.Provider>
        </>
    )
}

export default Api;