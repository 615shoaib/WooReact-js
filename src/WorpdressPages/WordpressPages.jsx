import Sidebar from "../Components/Sidebar"
import Slider from "../Components/Slider/Slider"
import { Routes,Route } from "react-router-dom"

const WordpressPages =()=>{
    return(
        <>
       
       <Routes>
        <Route  index element={<Sidebar />} />
        <Route  path="/"  element={ <Slider />}/>
       </Routes>
      
        </>
    )
}

export default WordpressPages