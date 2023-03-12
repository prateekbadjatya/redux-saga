import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {getUsers} from '../store/actions/users'
const Products = () => {
  const  {products}  = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch({
      type: "products/LOAD_PRODUCTS",
    });

    dispatch({
      // this action will be filtered 
      // to see it will not be visisble in redux de v tool actions tab
      type: "products/BOXING_DAY_OFFERS"
    })
  }, [dispatch]);

  
  const addFavorite = (id) => {
    console.log("Adding product to favorite", id);
  };
  const addToCart = (id) => {
    console.log("Adding product to cart", id);
  };
  return (
    <div>
      <ul className="list-group">
        {products?.map((prod) => (
          <ProductItem
            key={prod.id}
            item={prod}
            onFavorite={addFavorite}
            onCartAdd={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
