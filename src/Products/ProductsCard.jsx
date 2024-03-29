import { Link } from "react-router-dom";
import EyeIcone from './EyeIcone';
import AddToCart from './AddToCart';


const ProductsCard = ({ products, category }) => {

 
   const homapage = Array.isArray(products) ? products.slice(0, 5) : [];
   
  return (
      <div className='container'>
         <div className='row'>
            <div className='col-lg-12 '>
               <div className='d-flex gap-5 mt-2 ms-5  justify-content-center mb-4'>
                  {Array.isArray(homapage) && homapage.map((card) => (
                     <div className='card border-0' key={card.id}>
                        <div className='card-img'>
                           {card.images && card.images.length > 0 && (
                              <img src={card.images[0].src} alt="products-card" style={{ width: "200px", height: "205px" }} />
                           )}
                           <div className="overlay">
                              <EyeIcone card={card} />
                              <AddToCart />
                           </div>
                        </div>

                        <p className='text-center'>{`Dress ${card.name}`}</p>
                        <p className='text-center' style={{ marginTop: "-15px" }} dangerouslySetInnerHTML={{ __html: card.description }} />
                        <p className='text-center' style={{ marginTop: "-25px" }}>${card.price}.00</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className='d-flex justify-content-center mb-2'>
               <Link to="/more-products">
                  <button className='border-0 bg-dark p-2 text-white'>Add More Products</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ProductsCard;
