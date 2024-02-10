import {useContext} from "react"
import { AppPrvoider } from '../Components/ContentApi/Api';
import HomeProducts from './HomeProducts';
import Category from './Category';

const WooCommerceExample = () => {
  const { products } = useContext(AppPrvoider);
 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5 mt-5 ">
          <Category products={products}/>
      ds
          </div>
        </div>
      </div>
    </>
  );
};

export default WooCommerceExample;
