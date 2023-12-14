import React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/useAppSelector";
import {addBasket, delMenu} from "../store/reducer/BasketSlice";

import {Link} from "react-router-dom";

const Menu = ({el} : any) => {
    const dispatch = useDispatch()
    const {product} = useAppSelector(state => state.BasketSlice)
      const Addbasket  = (el:any)=> {
          dispatch(addBasket(el))
          console.log('el',el)
      }
    return (
        <div className="container flex flex-wrap justify-between gap-10">
            {
                product.map((el) => (

                    <div className=" p-10 rounded bg-blue-950 w-[400px] h-[550px]">
                        <img src={el.image} className="w-[400px] h-[400px] object-cover rounded" alt=""/>
                        <div className="flex text-white justify-around pt-4 pb-4">
                            <h3>{el.name}</h3>
                            <h4>{el.price}</h4>
                        </div>
                        <div className="flex text-white justify-around">
                            <Link to={"/basket"}>
                                <button onClick={()=> Addbasket(el)} className="bg-blue-400 p-1 px-3 rounded">Basket</button>
                            </Link>
                            <button onClick={() => dispatch(delMenu(el))} className="bg-red-700 p-1 px-3 rounded">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;