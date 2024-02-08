import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus, removeItem } from "../redux/features/basketSlice";
import { MdDelete } from "react-icons/md";

function ProductList({ product }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }
  return (
    <div className="md:p-4 lg:px-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center">
      <NavLink className="mx-auto py-2">
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
          src={product.category.image}
          alt={product.title}
        />
      </NavLink>

      <div className="py-2 px-3">
        <h2 className="card-title font-medium mb-2">{product.title}</h2>
        <p className="line-clamp-1 mb-2">{product.description}</p>
        <div className="mb-2">
          <button className="btn btn-outline">{product.category.name}</button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="mr-1 font-semibold">Price:</span>
            <span className="font-medium">
              ${product.price.toLocaleString("en-Us")}
            </span>
          </div>

          {!show && (
            <button
              onClick={handleClick}
              className="border px-3 py-2 rounded-md bg-[#703BF7] text-white"
            >
              Add to cart
            </button>
          )}
          {show && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(plus(product.id))}
                className="px-3 py-2 bg-[#703BF7] text-white rounded-md"
              >
                +
              </button>
              <button className="px-3 py-2 bg-[#E4E4E7] rounded-md">
                {product.amount}
              </button>
              <button
                onClick={() => {
                  if(product.amount == 1){
                    dispatch(removeItem(product.id))
                  }else{
                    dispatch(minus(product.id))
                  }
                }}
                className="px-3 py-2 bg-[#703BF7] text-white rounded-md"
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
