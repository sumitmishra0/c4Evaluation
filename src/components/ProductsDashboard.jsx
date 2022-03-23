import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData } from "../Redux/actions";
import "../App.css";

export const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // to get all products list on component mounts
  console.log(data);
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products list and display the results */}
        {data &&
          data.map((e, id) => {
            return (
              <div className="myallproduct">
                {/* display the results here */}
                <h2>{e.title}</h2>
                <img src={e.image} alt="" />
                <h3> $ {e.price}</h3>
                <h2>{e.brand}</h2>
                <h4>{e.category}</h4>
                
              </div>
            );
          })}
      </div>
    </>
    // <>
    //   <h2>Products</h2>
    // </>
  );
};