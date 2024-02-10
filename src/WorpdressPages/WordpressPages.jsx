import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

import DetailTOCart from "../Components/AddTocard/AddTocart";

const WordpressPages = () => {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/add-to-cart" element={<DetailTOCart/>} />
    </Routes>
 </>
  );
};

export default WordpressPages;
